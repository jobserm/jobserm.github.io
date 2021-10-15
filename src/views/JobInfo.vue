<template>
  <div class="job infomation">
     
      <c-text fontSize="4xl">งานทั้งหมด</c-text>
      <c-flex>
        <c-input-group size="sm" class="input">
            <c-input-left-element><c-icon name="phone" color="gray.300" /></c-input-left-element>
            <c-input borderColor="black" focus-border-color="indigo.200" w="200px" type="phone" placeholder="ค้นหา" />
        </c-input-group>
        <Country></Country>
        <Category></Category>
        <Money_range></Money_range>
      </c-flex>
      <JobCard></JobCard>

      <c-button-group :spacing="0" class="paginate">
          <c-button right-icon="chevron-left" variant-color="blue" variant="outline">
          </c-button>
          <c-button right-icon="chevron-right" variant-color="blue" variant="outline">
          </c-button>
      </c-button-group>
      <p> {{ jobs }}</p>
      
      
  </div>
</template>

<script>

import Country from "../components/combo-box/country.vue"
import Category from "../components/combo-box/category.vue"
import Money_range from "../components/combo-box/money-range.vue"
import JobCard from "../components/card/job_card.vue"
import JobApi from "../store/JobApi.js"

export default {
  components:{ Country,Category,Money_range,JobCard },
  data(){
    return{
      jobs:{}
    }
  },
  async created(){
    await this.fetchJobs()
  },
  methods:{
    async fetchJobs(){
      await JobApi.dispatch("fetchJob")
      this.jobs = JobApi.getters.jobs
      console.log("this.jobs")
      console.log(this.jobs)
    }
  }
  
}
</script>

<style>
  .paginate{
    margin-left: 800px;
    margin-bottom: 100px;
  }
</style>