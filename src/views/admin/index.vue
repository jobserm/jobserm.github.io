<template>
  <div>
      <c-flex>
        <Sidebar />
        <c-flex justify="center" flexGrow="1" bgColor="gray.50">
            <c-stack w="95%" :spacing="5">
                <Header header="Dashboard" icon="home"/>
                <c-flex justify="space-around" w="100%">
                    <WeeklyCard header="Users" amount="1204" remark="Increased by 23%"/>
                    <WeeklyCard header="Jobs" amount="402" remark="Increased by 7%"/>
                    <WeeklyCard header="Recently Online" amount="572" remark="Increased by 11%"/>
                </c-flex>
                <Chart />
                <UserTable />
            </c-stack>
        </c-flex>
      </c-flex>
  </div>
</template>

<script>
import Sidebar from "../../components/admin/Sidebar.vue";
import WeeklyCard from "../../components/admin/WeeklyCard.vue";
import Chart from "../../components/admin/Chart.vue";
import UserTable from "../../components/admin/UserTable.vue";
import Header from "../../components/admin/Header.vue";
export default {
    components: {
        Sidebar,
        WeeklyCard,
        Chart,
        UserTable,
        Header,
    }
}
</script>

<style>

</style>