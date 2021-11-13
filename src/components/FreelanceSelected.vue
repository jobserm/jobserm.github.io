<template>
   <c-box px="20" py="10">
      <loading v-if="isLoading" />
      <div v-if="!isLoading">
      <c-simple-grid :columns="[1, 1, 1, 5]" spacing="12" align="center" py="16">
        <div v-for="user in job.selected_user" :key="user.id">
          <a :href="'#/candidate-profile/'+job.id+'/'+user.id"> 
            <div>   
              <info
                v-bind:freelancerName="user.name"
                v-bind:freelancerLastname="user.lastname"
                v-bind:rating="job.review.toFixed(1)"
                v-bind:age="user.birthdate"
                v-bind:image="user.img_url"
                :star="require(`./all-freelance-page/star.png`)"
              />
            </div>
          </a>
        </div>
      </c-simple-grid>

    </div>
  </c-box>
</template>

<script>
import info from "./all-freelance-page/Info.vue"
import JobApi from "../store/JobApi"
export default {
    components: { info },
    name: "Info",
    data() {
      return {
        job: {},
        job_id: this.$route.params.id,
        isLoading: true
      }
    },
    async created() {
      await JobApi.dispatch("fetchJobByID", this.job_id)
      let res = JobApi.getters.getJobById
      this.job = res
      
      this.editFormat()

      this.isLoading = false
    },
    methods: {
        async editFormat() {
            this.job.users.map(item => {
                if (item.birthdate) {
                    let ageDifMs = Date.now() - new Date(item.birthdate).getTime()
                    let ageDate = new Date(ageDifMs)
                    item.birthdate = Math.abs(ageDate.getUTCFullYear() - 1970)
                }
                if (item.review === null) {
                    item.review = 0
                } else {
                    item.review = item.review.toFixed(1)
                }
                return item
            })
        },      
    },
    
}
</script>

<style>
</style>