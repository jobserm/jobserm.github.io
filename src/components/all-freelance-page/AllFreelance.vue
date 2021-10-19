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
import Job from "../../store/JobApi"
export default {
    components: { info },
    name: "Info",
    data() {
      return {
        id: '',
        job: {},
      }
    },

    async created() {
      this.id = this.$route.params.id;
      this.job = await Job.dispatch("getJobByID", this.id);
    },

    methods: {
      freelancerInfo() {
        this.$router.push({
          name: "--",
          params: { id: this.job.user.id}
        })
      }
    },
    
}
</script>

<style>
</style>