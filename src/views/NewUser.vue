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
export default {
    components: {
        NewUserForm,
    },
    data() {
        return {
            email: "p.patisxx@outlook.com",
            phone: "0955347386",
            firstname: "Patipan",
            lastname: "Boonsimma",
        }
    },
    methods: {
        register(value) {
            // get user data from API and assign to data.value
        }
    }
}
</script>

<style>

</style>