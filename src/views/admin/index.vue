<template>
  <div>
      <loading v-if="isLoading" />
      <c-flex>
        <Sidebar />
        <c-flex justify="center" flexGrow="1" bgColor="gray.50">
            <c-stack w="95%" :spacing="5">
                <Header header="Dashboard" icon="home"/>
                <c-flex justify="space-around" w="100%">
                    <WeeklyCard header="Users" v-bind:amount="users.length" remark="Increased by 23%"/>
                    <WeeklyCard header="Jobs" v-bind:amount="jobs.length" remark="Increased by 7%"/>
                    <!-- <WeeklyCard header="Recently Online" amount="572" remark="Increased by 11%"/> -->
                </c-flex>
                <Chart 
                v-bind:users="users_amount"
                v-bind:jobs="jobs_amount"/>
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
import backendInstance from '../../services/backendInstance';
export default {
    components: {
        Sidebar,
        WeeklyCard,
        Chart,
        UserTable,
        Header,
    },
    data() {
        return {
            users: [],
            jobs: [],
            isLoading: false,
            users_amount: Array(11).fill(0),
            jobs_amount: Array(11).fill(0),
        }
    },
    async created() {
        await this.fetchAllUsers();
        await this.fetchAllJobs();
    },
    methods: {
        async fetchAllUsers() {
            this.isLoading = true
            let res = await backendInstance.post('/api/users/get-all-users', {});
            console.log(res)
            if (res.status === 200) {
                this.users = res.data
                for (let i = 0; i < this.users.length; i++) {
                    let date = new Date(this.users[i].created_at);
                    this.users_amount[date.getMonth()] += 1;
                }
            }
            this.isLoading = false
        },
        async fetchAllJobs() {
            this.isLoading = true
            let res = await backendInstance.get('/api/get-all-jobs');
            if (res.status === 200) {
                this.jobs = res.data
                for (let i = 0; i < this.jobs.length; i++) {
                    let date = new Date(this.jobs[i].created_at);
                    this.jobs_amount[date.getMonth()] += 1;
                    console.log(this.jobs_amount)
                }
            }
            this.isLoading = false
        },
    }
}
</script>

<style>

</style>