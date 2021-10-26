<template>
  <div>
      <c-flex>
        <Sidebar />
        <c-flex justify="center" flexGrow="1" bgColor="gray.50">
          <c-stack w="95%">
            <Header header="Account Management" icon="user"/>
            <UserTable @parentGetUserByID="getUserByID"/>
            <AccountInfo v-bind:user="this.user"/>
          </c-stack>
        </c-flex>
      </c-flex>
  </div>
</template>

<script>
import Sidebar from "../../components/admin/Sidebar.vue";
import UserTable from "../../components/admin/UserTable.vue";
import Header from "../../components/admin/Header.vue";
import AccountInfo from "../../components/admin/AccountInfo.vue";

export default {
  components: {
    Sidebar,
    UserTable,
    Header,
    AccountInfo,
  },
  data() {
    return {
      user: {}
    }
  },
  methods: {
    getUserByID(value) {
      this.user = value
      console.log(this.user)
    }
  }
}
</script>

<style>

</style>