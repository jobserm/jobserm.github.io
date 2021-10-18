<template>
<div>
      <c-flex>
        <Sidebar />
        <c-flex justify="center" flexGrow="1" bgColor="gray.50">
          <c-stack w="95%">
            <Header header="Review Management" icon="star"/>
            <!-- start adding elements right here -->
            <ReviewTable />
          </c-stack>
        </c-flex>
      </c-flex>
  </div>
</template>

<script>
import Sidebar from "../../components/admin/Sidebar.vue";
import Header from '../../components/admin/Header.vue'
import ReviewTable from '../../components/admin/review/ReviewTable.vue'
export default {
    components: {
        Sidebar,
        Header,
        ReviewTable,
    }
}
</script>

<style>

</style>