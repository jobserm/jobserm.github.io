<template>
   <c-box px="20" py="10">
      <c-stack>
          <c-heading py="12">ผู้ที่สนใจ <br> {{ job.title }}</c-heading>
      </c-stack>

      <c-flex>
          <div v-for="image in job_images" :key="image">
              <c-image 
              :src="require(`${image.dog}`)"
              w="350px"
              objectFit="scale-down"
              p="2"
              />
          </div>
      </c-flex>


      <c-simple-grid :columns="[1, 1, 1, 5]" spacing="8" align="center" py="16">
        <div v-for="user in job.user" :key="user.id">
            <div @click="freelancerInfo()">   
              <info
                :image="require(`${user.path}`)"
                :freelancerName="user.name + user.lastname"
                :rating="user.rating"
                :age="user.birthdate"
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
        job: {},
      }
    },

    created() {
      //this.job = JSON.parse(localStorage.getItem('JobInfo'));
      this.getEsaaa()
    },

    methods: {
      async getEsaaa() {
        await JobApi.dispatch('fetchJobById', 1)
        this.job = await JobApi.getters.job_filtered

        console.log(this.job)
      }
    },
    
}
</script>

<style>
</style>