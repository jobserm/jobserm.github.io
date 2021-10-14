<template>
  <div>
      <c-flex>
          <Sidebar />
          <c-stack w="100%">
            <c-flex alignItems="center" pt="2rem" pl="2rem">
                <c-icon name="home" fontSize="2xl" />
                <c-text fontSize="2xl">Dashboard</c-text>
            </c-flex>
            <c-flex justify="space-around" w="100%">
                <WeeklyCard header="Users" amount="1204" remark="Increased by 23%"/>
                <WeeklyCard header="Jobs" amount="402" remark="Increased by 7%"/>
                <WeeklyCard header="Recently Online" amount="572" remark="Increased by 11%"/>
            </c-flex>
            <Chart />
          </c-stack>
      </c-flex>
  </div>
</template>

<script>
import Sidebar from "../../components/admin/sidebar.vue";
import WeeklyCard from "../../components/admin/WeeklyCard.vue";
import Chart from "../../components/admin/Chart.vue";
export default {
    components: {
        Sidebar,
        WeeklyCard,
        Chart,
    }
}
</script>

<style>

</style>