<template>
    <div>
        <all-user></all-user>
    </div>
</template>

<script>

import UserStore from "../store/UserStore.js"
import AllUser from "../components/all-freelance-page/AllUser.vue"
import Authservice from "../services/Authservice.js"
import AuthUser from "../store/AuthUser.js"
import Header from "../components/admin/Header.vue"

export default {
    name: "users",
    components: {
        AllUser,
    },
    data(){
        return{
            users:{},
        }
    },
    async created() {
        await this.fetchUsers()
    },
    methods: {
        
    }
}
</script>

<style>

</style>