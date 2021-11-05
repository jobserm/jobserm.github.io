<template>
    <c-stack px="5em" py="2em" w="90%">
        <c-heading>หน้าโปรไฟล์</c-heading>
        <c-box align="right">
            <c-button variant-color="indigo" align="right" >
                จ้างงาน 
            </c-button>

        </c-box>
        
        <c-flex>

            <info
                v-bind:freelancerName="user.name + user.lastname"
                v-bind:rating="user.review || 0"
                v-bind:age="user.birthdate"
                :star="require(`./star.png`)"
            />

        </c-flex>

    </c-stack>   
</template>

<script>
import Info from "../all-freelance-page/Info.vue"
import JobApi from "@/store/JobApi.js"
export default {
    components: {
        Info
    },
    data() {
        return {
            user: {}
        }
    },

    async created() {
        // console.log("--created-------")
        // this.user = JSON.parse(localStorage.getItem("user"))
        // console.log(this.user)
    },

    methods: {
        
    },
}
</script>

<style>
 
</style>