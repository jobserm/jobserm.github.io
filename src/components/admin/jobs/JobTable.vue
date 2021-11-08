<template>
    <div>
        <loading v-if="loading"/>
        <ve-table
            :fixed-header="true"
            :columns="columns"
            :table-data="tableData"
        />
        <c-box w="100%">
            <c-text fontSize="xl" textAlign="center" mt="2rem" v-show="dataEmpty"
            >Data empty</c-text
        >
      </c-box>
        <c-box textAlign="right">
            <ve-pagination 
                :total="countIndex"
                :page-index="pageIndex"
                :page-size="pageSize"
                @on-page-number-change="pageNumberChange"
                @on-page-size-change="pageSizeChange"
            />
        </c-box>

                
    </div>
</template>

<script>
import axios from "axios";
import JobApi from "../../../store/JobApi"
import AuthUser from "../../../store/AuthUser";

export default {
    data() {
        return {
            columns: [
                { field: "id", key: "a", title: "ID", align: "center" },
                { field: "title", key: "b", title: "Job Name", align: "left",
                renderBodyCell: ({ row, column, rowIndex }, h) => {
                    const text = row[column.field];
                    return (
                        <span>
                            <a
                                class="test-text"
                                onClick={() => this.getJobByID(row['id'])}
                                style="color:#1890ff;cursor:pointer;"
                            >
                                {text}
                            </a>
                        </span>
              );
          }, },
                { field: "job_owner[0].name", key: "c", title: "ผู้ว่าจ้าง", align: "left",
                renderBodyCell: ({ row, column, rowIndex }, h) => {
                    const text = row['job_owner'][0];
                    return (
                    <span>
                          {text.name}
                    </span>
                );
          },
                },
                { field: "report", key: "d", title: "รายงานความไม่เหมาะสม", align: "left" },
            ],
            // loading: true,
            rawData: [],
            pageIndex: 1,
            pageSize: 10,
            loading: true,
            dataEmpty: true,
            id: ''
        }
    },
    computed: {
        countIndex() {
            return this.rawData.length
        },
        tableData() {
            const { pageIndex, pageSize } = this 
            return this.rawData.slice((pageIndex - 1) * pageSize, (pageIndex * pageSize))
        },
    },
    async created () {
        await this.fetchAllJobs();
        this.$root.$refs.jobTable = this;
    },
    methods: {
        pageNumberChange( pageIndex ) {
            this.pageIndex = pageIndex
        },
        pageSizeChange( pageSize ) {
            this.pageIndex = 1
            this.pageSize = pageSize
        },

         async fetchAllJobs() {
             this.loading = true;
             await JobApi.dispatch('fetchAllJobs')
             let jobs = JobApi.getters.getAllJobs
             if (jobs.length > 0) {
                 this.rawData = jobs
                 this.loading = false
                 this.dataEmpty = false
             }
             this.loading = false
        },
        async getJobByID(id) {
            this.loading = true;
            this.id = id;
            await JobApi.dispatch('fetchJobByID', id)
            let job = JobApi.getters.getJobById
            this.$emit('parentGetJobById', job)
            this.loading = false;
        }
    },


}
</script>

<style>

</style>