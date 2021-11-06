<template>
  <div class="job infomation">
      
      <JobCard></JobCard> 
  </div>
</template>

<script>
import JobCard from "../components/card/job_card.vue"
// import JobCard from "../components/card/job_card_paginate.vue"
import JobApi from "../store/JobApi.js"
import Axios from "axios";
import CategoryStore from "../store/CategoryStore";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default {
  components: { JobCard },
  data(){
    return{
      form: {
        provinces: "",
        category:"",
        compensation:"",
        working_status:"",
      },
      jobs: {},
      provinces: [],
      categories: [],
    }
  },
  async created(){
    // await this.fetchJobs()
    this.getProvince()
    this.getCategories()
  },
  methods:{
    async fetchJobs(){
      await JobApi.dispatch("fetchJob")
      this.jobs = JobApi.getters.jobs
      console.log("this.jobs")
      console.log(this.jobs)
    },
    async getProvince() {
      let res = await Axios.get(`https://thaiaddressapi-thaikub.herokuapp.com/v1/thailand/provinces`);
      this.provinces = res.data;
    },
    async getCategories() {
      await CategoryStore.dispatch('fetchData')
      this.categories = CategoryStore.getters.getCategories
    },
  }
  
}
</script>

<style>
</style>