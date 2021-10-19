<template>
   <c-box px="20" py="10">
      <c-stack>
          <c-heading py="12">ผู้ที่สนใจ <br> {{ job.title }}</c-heading>
      </c-stack>

      <c-flex>
          <!-- <div v-for="image in job_images" :key="image">
              <c-image 
              :src="require(`${image.dog}`)"
              w="350px"
              objectFit="scale-down"
              p="2"
              />
          </div> -->
      </c-flex>

      <c-simple-grid :columns="[1, 1, 1, 5]" spacing="8" align="center" py="16">
        <div v-for="user in job.users" :key="user.id">
            <div @click="freelancerInfo()">   
              <info
                image="require(`${user.path}`)"
                v-bind:freelancerName="user.name + user.lastname"
                v-bind:rating="user.review || 0"
                v-bind:age="user.birthdate"
                :star="require(`./star.png`)"
              />
            </div>
        </div>
      </c-simple-grid>


  </c-box>
</template>

<script>
import info from "./Info.vue"
import JobApi from "../../store/JobApi"
export default {
    components: { info },
    name: "Info",
    data() {
      return {
        id: '',
        job: {},
      }
    },

    created() {
      // this.job = JSON.parse(localStorage.getItem('JobInfo'));
      this.getEsaaa()
    },

    methods: {
      async getEsaaa() {
        await JobApi.dispatch('fetchJobById', 1)
        this.job = JobApi.getters.job_filtered
        this.job.users.map(item => {
          if (item.birthdate) {
            let ageDifMs = Date.now() - new Date(item.birthdate).getTime()
            let ageDate = new Date(ageDifMs)
            item.birthdate = Math.abs(ageDate.getUTCFullYear() - 1970)
          }
          return item
        })
      }
    },
    
}
</script>

<style>
</style>