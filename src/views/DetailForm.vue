<template>
    <div>
        <profiles></profiles>
    </div>
</template>

<script>

import JobApi from "../store/JobApi";
import Profiles from "../components/details-profiles/Profiles.vue"
export default {
    name: "Profile",
    components: {
        Profiles
    },
    data(){
        return{
            jobs:{
                data:[]
            }
        }
    },

     async created(){
    await this.fetchJobs()
  },

    methods: {
        async fetchJobs(){
            await JobApi.dispatch("fetchJob")
            this.jobs = JobApi.getters.jobs
        }
    }
};

</script>

<style>

</style>