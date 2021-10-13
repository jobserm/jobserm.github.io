<template>
  <div class="job infomation">
     
    <c-text fontSize="4xl">พาน้องหมาไปเดินเล่น</c-text>
    <c-flex>
      <JobCard></JobCard>
    </c-flex>
      
      
  </div>
</template>

<script>

import JobCard from "../components/card/job_card.vue"

export default {
  components:{ JobCard }
}
</script>

<style>
</style>