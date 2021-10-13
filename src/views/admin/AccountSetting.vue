<template>
  <div>
      <c-flex>
        <Sidebar />
        <c-stack w="100%">
          <Header header="Account Management" icon="user"/>
          <UserTable />
          <AccountInfo />
        </c-stack>
      </c-flex>
  </div>
</template>

<script>
import Sidebar from "../../components/admin/Sidebar.vue";
import UserTable from "../../components/admin/UserTable.vue";
import AccountInfo from "../../components/admin/AccountInfo.vue";
import Header from "../../components/admin/Header.vue";
export default {
  components: {
    Sidebar,
    UserTable,
    AccountInfo,
    Header,
  }
}
</script>

<style>

</style>