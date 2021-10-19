<template>
    <c-stack px="5em" py="2em" w="90%">
        <c-heading>หน้าโปรไฟล์</c-heading>
        <c-box align="right">
            <c-button variant-color="indigo" align="right" >
                จ้างงาน 
            </c-button>

        </c-box>
        <c-flex>
            
            <c-stack  px="10" w="50%" align="center">
                <div>
                    <info-profile

                    :star="require(`./star.png`)"
                    
                    />
                </div>
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
         id:'',
         job:{},
     }
 },

 async created() {
     this.job = JSON.parse(localStorage.getItem(user))
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
}
</script>

<style>
 
</style>