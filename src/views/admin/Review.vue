<template>
<div>
      <c-flex>
        <Sidebar />
        <c-flex justify="center" flexGrow="1" bgColor="gray.50">
          <c-stack w="95%">
            <Header header="Review Management" icon="star"/>
          </c-stack>
        </c-flex>
      </c-flex>
  </div>
</template>

<script>
import Sidebar from "../../components/admin/Sidebar.vue";
import Header from '../../components/admin/Header.vue'
export default {
    components: {
        Sidebar,
        Header,
    }
}
</script>

<style>

</style>