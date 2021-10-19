<template>
<div>
      <c-flex>
        <Sidebar />
        <c-flex justify="center" flexGrow="1" bgColor="gray.50">
          <c-stack w="95%">
            <Header header="Jobs Management" icon="briefcase"/>
            <!-- <JobChart /> -->
            <JobTable @parentGetJobById="getJobById" />
            <Jobs v-bind:job="job"/>
            <Header header="Categories Management" icon="tag"/>
            <CategoryTable />
          </c-stack>
        </c-flex>
      </c-flex>
  </div>
</template>

<script>
import Sidebar from "../../components/admin/Sidebar.vue";
import Header from '../../components/admin/Header.vue'
// import JobChart from "../../components/admin/jobs/JobChart.vue";
import CategoryTable from "../../components/admin/CategoryTable.vue";
import JobTable from "../../components/admin/jobs/JobTable.vue";
import Jobs from "../../components/admin/JobInfo.vue";

export default {
  data() {
    return {
      job: {}
    }
  },
    components: {
        Sidebar,
        Header,
        // JobChart,
        CategoryTable,
        JobTable,
        Jobs,
    },
    methods: {
      getJobById(value){
        this.job = value
        console.log(this.job)
      } 
    }
}
</script>

<style>

</style>