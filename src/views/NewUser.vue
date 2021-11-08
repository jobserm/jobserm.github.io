<template>
<c-flex justify="center" py="8vh">
    <loading v-if="isLoading" />
    <c-stack w="55rem" >
        <c-form-control>
            <NewUserForm
            title="ข้อมูลสมาชิกใหม่"
            v-bind:email="email"
            v-bind:phone="phone"
            v-bind:firstname="firstname"
            v-bind:lastname="lastname"
            @saveInfo="register"/>
        </c-form-control>
    </c-stack>
</c-flex>
</template>

<script>
import NewUserForm from "../components/form/NewUserForm.vue";
import AuthUser from "../store/AuthUser";
import axios from "axios"

export default {
    components: {
        NewUserForm,
    },
    data() {
        return {
            email: "",
            phone: "",
            firstname: "",
            lastname: "",
            isLoading: false,
        }
    },
    created() {
        this.initialize()
    },
    methods: {
        initialize() {
            // get user data from API and assign to data.value
            let user = AuthUser.getters.user
            console.log(user)
            let { email, phone, name, lastname } = AuthUser.getters.user
            this.email = email
            this.phone = phone
            this.firstname = name
            this.lastname = lastname
        },
        async register({ body, img}) {
            this.isLoading = true
            console.log("body ", body)
            console.log("img ", img)
            let res = await AuthUser.dispatch('firstRegister', body)
            console.log(res)
            if (res.success) {
                let formData = new FormData()
                let token = JSON.parse(localStorage.getItem('auth-jobserm')).access_token
                console.log(token)
                img.forEach(async (file) => {
                formData.append('photo', file)
                let res = await axios.post(`http://localhost:8000/api/images/uploadProfile/${AuthUser.getters.user.id}`, formData, {
                    headers: {
                        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('auth-jobserm')).access_token}`,
                    }
                })
                console.log(res)
                if (res.status === 200) {
                    console.log('upload success')
                }
            })
                this.isLoading = false
                this.$swal("ลงทะเบียนสำเร็จ", `ขอบคุณที่ให้ความสนใจ`, "success")
                this.$router.push("/")
            } else {
                this.$swal("ลงทะเบียนไม่สำเร็จ", res.message, "error")
            }
        }
    }
}
</script>

<style>

</style>