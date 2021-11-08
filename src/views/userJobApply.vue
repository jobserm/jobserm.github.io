<template>
  <div>
     <Job></Job>
      
  </div>
</template>

<script>
import Job from "@/components/card/job_card_user_apply.vue"

export default {
  components:{ Job },
  data() {
    return {
       job:[],
    }
  },
  async created(){
  },
  methods:{
  }
}
</script>

<style>
</style>