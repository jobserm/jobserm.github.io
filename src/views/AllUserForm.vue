<template>
    <div class="Freelance Profiles">
        <all-user></all-user>
    </div>
</template>

<script>

import User from "../store/UserStore.js"
import AllUser from "../components/all-freelance-page/AllUser.vue"
export default {
    name: "users",
    components: {
        AllUser
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