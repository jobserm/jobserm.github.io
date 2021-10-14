<template>
<div>
      <c-flex>
        <Sidebar />
        <c-flex justify="center" flexGrow="1" bgColor="gray.50">
          <c-stack w="95%">
            <Header header="Jobs Management" icon="briefcase"/>
            <JobChart />
            <Header header="Categories Management" icon="tag"/>
          </c-stack>
        </c-flex>
      </c-flex>
  </div>
</template>

<script>
import Sidebar from "../../components/admin/Sidebar.vue";
import Header from '../../components/admin/Header.vue'
import JobChart from "../../components/admin/jobs/JobChart.vue";
export default {
    components: {
        Sidebar,
        Header,
        JobChart,
    }
}
</script>

<style>

</style>