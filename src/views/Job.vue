<template>
  <div>
     <Job></Job>
      
  </div>
</template>

<script>
import Job from "@/components/JobInformation"

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