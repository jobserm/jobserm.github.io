<template>
  <div class="job infomation">
      <c-text fontSize="4xl" ml="10rem" mt="2rem">{{ "งานทั้งหมด" }}</c-text>
      <c-flex>
        <c-input-group size="sm" class="input" rounded="md">
            <!-- <c-input-left-element><c-icon name="phone" color="gray.300" /></c-input-left-element> -->
            <c-input borderColor="black" ml="10rem" focus-border-color="indigo.200" w="30rem" mt="1.5rem" h="2.6rem" type="phone" placeholder="ค้นหา" />
        </c-input-group>

        <c-flex mt="1.5rem" ml="1rem">
          <Country></Country>
          <Category></Category>
          <Money_range></Money_range>
        </c-flex>
      </c-flex>
      <JobCard></JobCard>
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
</style>