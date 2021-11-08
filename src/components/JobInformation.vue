<template>
  <div>
    <loading v-if="isLoading" />
      <div v-if="!isLoading">
      <c-stack :spacing="6">
        <c-text fontSize="6xl" ml="20rem" mt="2rem">{{ jobId.title }}</c-text>

          <c-flex ml="20rem">
            <c-image mt="2rem" align="center" w="50%"
                      src="https://img.pptvhd36.com/thumbor/2020/07/16/news-0ae9eefe51.jpg" />

            <c-image  ml="5rem"
                      w="30%"
                      h="30%"
                      mt="2rem"
                      src="https://www.forbes.com/advisor/wp-content/uploads/2021/03/pit-bull-featured.jpg" />

            <!-- <c-image  ml="5rem"
                      w="30%"
                      h="30%"
                      src="https://www.forbes.com/advisor/wp-content/uploads/2021/03/pit-bull-featured.jpg" /> -->
          </c-flex>

          <c-flex>
              <c-text color="indigo.400"  fontSize="5xl" ml="20rem">ชั่วโมงละ {{  jobId.compensation }} บาท</c-text>

              <!-- button -->
              <c-flex ml="70rem">
                <router-link to="/additionals" >
                  <c-button h="4rem" w="19rem" fontSize="2xl" right-icon="arrow-forward" fontWeight="md" bg="#FE9A22" v-if="validated">
                      สมัครงาน
                  </c-button>
                </router-link>

              <router-link to="/review-form" >
                <c-button h="4rem" w="19rem" fontSize="2xl" @click="finish" color="blue" bgColor="#D3EDED " v-if="validated_interest && jobId.working_status === 'IN PROGRESS'">
                    จบงาน
                </c-button>
              </router-link>
              </c-flex>
          </c-flex>

          <c-text fontSize="4xl" ml="20rem" as="ins" mt="6rem">รายละเอียดงาน</c-text>

          <c-box class="compensation">
              <c-text fontSize="3xl" ml="20rem" >อัตราค่าจ้าง</c-text>
              <c-text fontSize="xl" ml="20rem"> - ชั่วโมงละ {{  jobId.compensation }} บาท </c-text>
          </c-box>
          <c-box class="description">
              <c-text fontSize="3xl" ml="20rem">รายละเอียดงาน</c-text>
              <c-text fontSize="xl" ml="20rem"> - {{  jobId.description }} </c-text>
          </c-box>
          <c-box class="requirement">
              <c-text fontSize="3xl" ml="20rem">คุณสมบัติ</c-text>
              <c-text fontSize="xl" ml="20rem"> - {{  jobId.requirement }} </c-text>
          </c-box>
      </c-stack>
      
      <br>
      <br>
      <!-- <c-text v-if="validated" fontSize="4xl" ml="20rem" mt="2rem"> -->
        <!-- หากคุณกำลังมองหางานอื่นอยู่
          <JobCard v-if="validated"> 

          </JobCard> -->
      <!-- </c-text> -->
      </div>
    </div>
</template>

<script>
import JobApi from "@/store/JobApi.js"
import UserApi from "@/store/AuthUser.js"
import UserApii from "@/store/UserStore.js"
import JobCard from "../components/card/job_card_info_page.vue"

export default {
  // components:{ JobCard  },
  data() {
    return {
       job:[ { "id": 2, "compensation": 15304, "description": "Adipisci saepe perspiciatis rerum nobis neque libero. Natus quaerat quia nulla ipsam quo. Omnis est voluptates ratione.", "requirement": "Et expedita voluptas cupiditate eos veritatis repellendus. Iure autem quia dolorum non.", "province": "North Adeline", "title": "Government", "created_at": "2021-10-02T18:44:39.000000Z", "updated_at": "2021-10-02T18:44:39.000000Z" } ],
       id:0,
       jobId:[],
       userToReview: [],
       user_loged_in:[],
       isLoading: true,
    }
  },
  async created(){
    console.log("created")
    this.user_loged_in = UserApi.getters.user
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

        this.isLoading = false
      }
    )
    this.jobId = JSON.parse(localStorage.getItem('YourItem'));
    console.log("this.user_loged_in" ,this.user_loged_in)
    console.log("created")
  },
  computed:{
    validated() {
      if (this.user_loged_in.id === this.jobId.user_id){
        return false
      }
      return true
    },
      validated_interest() {
      if (this.user_loged_in.id === this.jobId.user_id){
        return true
      }
      return false
    },
        count () {
      return JobApi.state.JobById
      // Or return basket.getters.fruitsCount
      // (depends on your design decisions).
    }
  },
  methods:{
    // async fetchJob(){
    //   this.job = JobApi.getters.job_filtered
    //   console.log("jobfill",this.job)
    // }
    async finish(){

      console.log(this.jobId.users[1].info[0].pivot.is_selected)
      console.log(this.jobId.users[0].info[0].pivot.is_selected)
      console.log(this.jobId.users.length)

      for(let i = 0 ; i<this.jobId.users.length  ; i++)
      {
        console.log("user_id",this.jobId.users[i].info[0].pivot.user_id)
        console.log("is_selected",this.jobId.users[i].info[0].pivot.is_selected)
        if(this.jobId.users[i].info[0].pivot.is_selected == 1)
        {
          await UserApii.dispatch("fetchUserByID", this.jobId.users[i].info[0].pivot.user_id)
          // await JobApi.dispatch("fetchUserFinish",this.jobId.id)
          this.userToReview = UserApii.getters.fetchUser
        }
        
      }

      
      console.log("userToReview", this.userToReview)
      localStorage.setItem("userToReview" , JSON.stringify(this.userToReview))
      localStorage.setItem("๋JobId" , JSON.stringify(this.jobId.id))
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