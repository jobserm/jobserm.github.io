<template>
  <div>
      <c-stack :spacing="6">
        <c-text fontSize="4xl" ml="20rem" mt="2rem">{{ jobId.title }}</c-text>

          <c-flex ml="20rem">
            <c-image  w="40%"
                      src="https://img.pptvhd36.com/thumbor/2020/07/16/news-0ae9eefe51.jpg" />

            <c-image  ml="5rem"
                      w="30%"
                      h="30%"
                      src="https://www.forbes.com/advisor/wp-content/uploads/2021/03/pit-bull-featured.jpg" />

            <!-- <c-image  w="20%"
                      h="10%" 
                      mt="13rem"
                      src="https://www.cdc.gov/healthypets/images/pets/angry-dog.jpg?_=03873" /> -->
          </c-flex>

          <c-flex>
              <c-text color="indigo.400"  fontSize="3xl" ml="20rem">ชั่วโมงละ {{jobId.compensation }} บาท</c-text>
          </c-flex>

          <!-- button -->
          <c-flex class="button" justify="space-between" mr="10rem" pt="1rem" w="17%" m="auto">
            <router-link to="/additionals" >
                <c-button  right-icon="arrow-forward"  mt="1rem" fontWeight="sm" variant-color="blue">
                    สนใจงานนี้
                </c-button>
            </router-link>

            <router-link to="/review-form" >
              <c-button @click="finish" color="blue" width="150px" bgColor="#D3EDED "  mt="1rem" >
                  จบงาน
              </c-button>
            </router-link>
          </c-flex>

          <c-text fontSize="md" ml="20rem" as="ins" mt="1rem">รายละเอียดงาน</c-text>

          <c-box class="compensation">
              <c-text fontSize="2xl" ml="20rem" >อัตราค่าจ้าง</c-text>
              <c-text ml="20rem"> - ชั่วโมงละ {{jobId.compensation }} บาท </c-text>
          </c-box>
          <c-box class="description">
              <c-text fontSize="2xl" ml="20rem">รายละเอียดงาน</c-text>
              <c-text ml="20rem"> - {{jobId.description }} </c-text>
          </c-box>
          <c-box class="requirement">
              <c-text fontSize="2xl" ml="20rem">คุณสมบัติ</c-text>
              <c-text ml="20rem"> - {{jobId.requirement }} </c-text>
          </c-box>
      </c-stack>
      {{ jobId}}
    <JobCard></JobCard>
  </div>
</template>

<script>
import JobApi from "@/store/JobApi.js"
import JobCard from "../components/card/job_card_info_page.vue"

export default {
  computed: {
    count () {
      return JobApi.state.JobById
      // Or return basket.getters.fruitsCount
      // (depends on your design decisions).
    }
  },
  components:{ JobCard  },
  data() {
    return {
       job:[ { "id": 2, "compensation": 15304, "description": "Adipisci saepe perspiciatis rerum nobis neque libero. Natus quaerat quia nulla ipsam quo. Omnis est voluptates ratione.", "requirement": "Et expedita voluptas cupiditate eos veritatis repellendus. Iure autem quia dolorum non.", "province": "North Adeline", "title": "Government", "created_at": "2021-10-02T18:44:39.000000Z", "updated_at": "2021-10-02T18:44:39.000000Z" } ],
       id:0,
       jobId:[],
       userToReview: []
    }
  },
  async created(){
    console.log("created")

    await JobApi.watch(
      (state) => {
        return JobApi.getters.job_filtered
      },
      (newValue, oldValue) => {
        this.job.push(newValue)
        localStorage.setItem('YourItem',JSON.stringify(newValue))
        this.jobId = JSON.parse(localStorage.getItem('YourItem'));
        console.log("this.jobId" ,this.jobId)
        console.log(localStorage)
        console.log("this.newValue" ,newValue)
        console.log("this.job" ,this.job)
      }
    )
    this.jobId = JSON.parse(localStorage.getItem('YourItem'));
    console.log("this.jobId" ,this.jobId)
    console.log("created")
  },
  methods:{
    // async fetchJob(){
    //   this.job = JobApi.getters.job_filtered
    //   console.log("jobfill",this.job)
    // }
    async finish(){
      this.id = this.jobId.id
      await JobApi.dispatch("fetchUserFinish", this.id)
      this.userToReview = JobApi.getters.getUserFinish
      console.log("userToReview", this.userToReview)
      localStorage.setItem("userToReview" , JSON.stringify(this.userToReview.data[0][0]))
    }
  }
}
</script>
<style>
    /* .compensation{
        margin-bottom: 40px;
    }
    .description{
        margin-bottom: 40px;
    }
    .requirement{
        margin-bottom: 40px;
    } */
    /* .title_container{
        margin: 40px;
    }   
    .information_container{

        margin: 40px;
        row-gap: 100px;
    } */
    /* .btn{
        justify-content: space-between;
    } */
    
</style>