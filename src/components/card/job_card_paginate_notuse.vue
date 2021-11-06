<template>
    <div>
        {{jobs}}
        <ve-table :columns="columns" :table-data="tableData" />
        <div class="table-pagination">
            <ve-pagination
                :total="totalCount"
                :page-index="pageIndex"
                :page-size="pageSize"
                @on-page-number-change="pageNumberChange"
                @on-page-size-change="pageSizeChange"
            />
        </div>
    </div>
</template>

<style>
    .table-pagination {
        margin-top: 20px;
        text-align: right;
    }
</style>

<script>

import JobApi from "@/store/JobApi.js"
import UserApi from "@/store/AuthUser.js"
import Axios from "axios";
import CategoryStore from "@/store/CategoryStore";

    // Simulation table data from database
    let DB_DATA = [];

    export default {
        data() {
            return {
                // page index
                pageIndex: 1,
                // page size
                pageSize: 10,
                columns: [
                    {
                        field: "",
                        key: "a",
                        title: "#",
                        align: "center",
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            return (this.pageIndex - 1) * this.pageSize + rowIndex + 1;
                        },
                    },
                    { field: "name", key: "b", title: "Name", align: "center" },
                    { field: "date", key: "c", title: "Date", align: "left" },
                    { field: "hobby", key: "d", title: "Hobby", align: "left" },
                    { field: "address", key: "e", title: "Address", width: "" },
                ],
                form: {
                    provinces: "",
                    category:"",
                    compensation:"",
                    working_status:"",
                },
                title:"",
                jobs:{},
                count_job:0,
                payload_url:"",
                job_id:0,
                provinces: [],
                categories: [],
                compensation_array: [],
                less:0,
                most:0,
                user_id:0,
                user:[]
                }
        },
        computed: {
            // table data
            tableData() {
                const { pageIndex, pageSize } = this;
                return DB_DATA.slice((pageIndex - 1) * pageSize, pageIndex * pageSize);
            },
            // total count
            totalCount() {
                return DB_DATA.length;
            },
        },
        methods: {
            // page number change
            pageNumberChange(pageIndex) {
                this.pageIndex = pageIndex;
            },

            // page size change
            pageSizeChange(pageSize) {
                this.pageIndex = 1;
                this.pageSize = pageSize;
            },

            // Simulation table data
            initDatabase() {
                DB_DATA = [];
                for (let i = 0; i < 1000; i++) {
                    DB_DATA.push({
                        name: "John" + i,
                        date: "1900-05-20",
                        hobby: "coding and coding repeat" + i,
                        address: "No.1 Century Avenue, Shanghai" + i,
                    });
                }
            },
            fetchUser(){
                this.user = UserApi.getters.user
                this.user_id = this.user.id
                console.log("this.user==>",this.user)
            },
            async fetchJobs(){
                let id = this.user_id
                await JobApi.dispatch("fetchAllAvaJobsNotLogIn",id)
                this.jobs = JobApi.getters.getAllJobsAvaNotLogIn
                this.count_job = this.jobs.length
                console.log(this.count_job)
            }
        },
        async created() {
            await this.initDatabase();
            await this.fetchUser();
            await this.fetchJobs()
        },
    };
</script>