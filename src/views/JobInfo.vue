<template>
  <div class="job infomation">
      <c-text fontSize="4xl" ml="10rem" mt="2rem">{{ "งานทั้งหมด" }}</c-text>
      <c-flex>
        <c-input-group size="sm" class="input" rounded="md">
            <!-- <c-input-left-element><c-icon name="phone" color="gray.300" /></c-input-left-element> -->
            <c-input borderColor="black" ml="10rem" focus-border-color="indigo.200" w="30rem" mt="1.5rem" h="2.6rem" type="phone" placeholder="ค้นหา" />
        </c-input-group>

        <c-flex mt="1.5rem" ml="1rem">
          <c-form-label for="province" color="gray.600">{{
              "จังหวัด"
            }}</c-form-label>
            <!-- จังหวัด -->
          <c-select id="province" v-model="form.province">
              <option value="" style="display:none;" >จังหวัด</option>
              <option v-for="index in provinces.data" :key="index.id">{{ index.province }}</option>
          </c-select>
          <!-- ประเภทงาน-->
          <c-select id="type" v-model="form.category">
              <option value="" style="display:none;" >ประเภทงาน</option>
              <option v-for="index in categories" :key="index.id">{{ index.category_name }}</option>
          </c-select>
          <!-- ค่าตอบแทน -->
          <c-select id="type" v-model="form.compensation">
              <option value="" style="display:none;" >  ค่าตอบแทน</option>
              <option v-for="index in componsations" :key="index.id">{{ index.compensation }}</option>
              <option>3,000 - 4,000</option>
              <option>4,100 - 5,000</option>
              <option>5,100 - 6,000</option>
              <option>6,100 - 7,000</option>
              <option>7,100 - 8,000</option>
              <option>8,100 - 9,000</option>
              <option>9,100 - 10,000</option>
              <option>11,000 - 20,000</option>
              <option>21,000 - 40,000</option>
              <option>41,000 - 60,000</option>
          </c-select>
          <!-- สถานะการทำงาน -->
          <c-select id="type" v-model="form.working_status">
              <option value="" style="display:none;" >สถานการทำงาน</option>
              <option v-for="index in working" :key="index.id">{{ index.working_status }}</option>
              <option>AVAILABLE</option>
              <option>IN PROGRESS</option>
              <option>FINISH</option>
          </c-select>
        </c-flex>
        </c-flex>
      <JobCard></JobCard> 
  </div>
</template>

<script>
import JobCard from "../components/card/job_card.vue"
import JobApi from "../store/JobApi.js"
import Axios from "axios";
import CategoryStore from "../store/CategoryStore";

export default {
  components: { JobCard },
  data(){
    return{
      form: {
        provinces: ""
      },
      jobs: {},
      provinces: [],
      categories: [],
    }
  },
  async created(){
    await this.fetchJobs()
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