<template>
<div>
      <c-flex>
        <Sidebar />
        <c-flex justify="center" flexGrow="1" bgColor="gray.50">
          <c-stack w="95%">
            <Header header="Jobs Management" icon="briefcase"/>
            <!-- <JobChart /> -->
            <JobTable @parentGetJobById="getJobById" />
            <Jobs v-bind:job="job" v-bind:showDeleteBtn="showDeleteBtn"/>
            <Header header="Categories Management" icon="tag"/>
            <CategoryTable @parentGetCategoryById="getCategoryById" />
            <CategoryInfo v-bind:category="category" v-bind:showEditBtn="showEditBtn"/>
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
import CategoryInfo from "../../components/admin/CategoryInfo.vue"

export default {
  data() {
    return {
      job: {},
      showDeleteBtn: false,
      category: {},
      showEditBtn: false
    }
  },
    components: {
        Sidebar,
        Header,
        // JobChart,
        CategoryTable,
        JobTable,
        Jobs,
        CategoryInfo,
    },
    created() {
      this.$root.$refs.jobInfo = this
    },
    methods: {
      getJobById(value){
        this.job = value
        this.showDeleteBtn = true
      },
      clearJob() {
        this.job = {
          title: '',
          description: '',
          requirement: '',
          province: '', 
          compensation: '',
          status: '',
          category_name: [{
            category_name:"-"
          }]

      },
        this.showDeleteBtn = false
      },
      getCategoryById(value) {
        this.category = value
        this.showEditBtn = true
      },
      clearCategory() {
        this.category = {
          category_name: '',
          job_count: 0
        }
        this.showEditBtn = false
      }
    }
}
</script>

<style>

</style>