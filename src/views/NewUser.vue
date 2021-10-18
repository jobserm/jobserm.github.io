<template>
<c-flex justify="center" py="8vh">
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
        async register(value) {
            await AuthUser.dispatch('firstRegister', value)
            this.$swal("ลงทะเบียนสำเร็จ", "success")
        }
    }
}
</script>

<style>

</style>