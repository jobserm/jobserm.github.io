<template>
  <div class="job infomation">



     <div v-if="job.length > 0 ">
         <div class="title_container">
            <c-text fontSize="4xl">{{ jobId.title }}</c-text>
            <c-flex class="btn">
                <c-text color="indigo.400" fontSize="2xl">ชั่วโมงละ {{jobId.compensation }} บาท</c-text>
                <c-box class="button">
                <c-button right-icon="arrow-forward" variant-color="blue" variant="outline">
                    สนใจงานนี้
                </c-button>
                </c-box>
                

            </c-flex>
         </div>
         <div class="information_container">
            <c-box class="compensation">
                <c-text fontSize="xl">อัตราค่าจ้าง</c-text>
                - ชั่วโมงละ {{jobId.compensation }} บาท
            </c-box>
            <c-box class="description">
                <c-text fontSize="xl">รายละเอียดงาน</c-text>
                - {{jobId.description }}
            </c-box>
            <c-box class="requirement">
                <c-text fontSize="xl">คุณสมบัติ</c-text>
                - {{jobId.requirement }}
            </c-box>

         </div>
        
     </div>
     <div v-if="jobId.length <= 0 ">
        <c-text fontSize="4xl">loading</c-text>
     </div>
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
       jobId:[]
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
  }
}
</script>
<style>
    .compensation{
        margin-bottom: 40px;
    }
    .description{
        margin-bottom: 40px;
    }
    .requirement{
        margin-bottom: 40px;
    }
    .title_container{
        border: 1px solid red;
        margin: 40px;
    }   
    .information_container{
        border: 1px solid red;
        margin: 40px;
        row-gap: 100px;
    }
    .btn{
        justify-content: space-between;
    }

    
</style>