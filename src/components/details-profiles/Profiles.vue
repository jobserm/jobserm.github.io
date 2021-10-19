<template>
    <c-stack px="5em" py="2em" w="90%">
        <c-heading>หน้าโปรไฟล์</c-heading>
        <c-box align="right">
            <c-button variant-color="indigo" align="right" >
                จ้างงาน 
            </c-button>

        </c-box>
        <c-flex>
            <c-stack
                px="10" w="50%" 
                wrap="wrap"
                rounded="0.5rem"
                p="5"
                bgColor="brand.400" 
                shadow="xl" 
                size="400"
                border-width="1px"
                align="center"
                justify="center"
                >
                
                <c-box justify="center">
                    <c-image v-bind:src="require('./user.png')" 
                            w="15rem" 
                            borderRadius="50%" 
                            marginTop="auto"
                            py="2"/>
                </c-box>
            </c-stack>
            <c-stack  px="10" w="50%" align="center">
                <info-profile></info-profile>
            </c-stack>
        </c-flex>

    </c-stack>   
</template>

<script>
import InfoProfile from "./InfoProfile.vue"
import JobApi from "@/store/JobApi.js"

export default {
    components: {
        InfoProfile
    },
 data() {
     return {
        job:{},
     }
 },

 async created() {
     await this.fetchJobs()
 },

 methods: {
     async fetchJobs(){
         await JobApi.dispatch("fetchJob")
         this.jobs = JobApi.getters.jobs
        let {         
            name,
            lastname ,
            email,
            birthdate,
            gender,
            phone,
            address,
            facebook,
            line,
            activation,
            }=this.jobs.data[0].users[0]
            console.log(name)
        },
     },
     async value(id){
         await JobApi.dispatch("fetchJobById", id)
        },
}
</script>

<style>
 
</style>