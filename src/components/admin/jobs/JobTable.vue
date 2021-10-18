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
import JobApi from "../../../store/JobApi"

export default {
    data() {
        return {
            columns: [
                { field: "id", key: "a", title: "ID", align: "center" },
                { field: "title", key: "b", title: "Job Name", align: "left" },
            ],
            // loading: true,
            rawData: [],
            pageIndex: 1,
            pageSize: 10,
            loading: true,
            dataEmpty: true,
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
             await JobApi.dispatch('fetchAllJobs')
             let jobs = JobApi.getters.getAllJobs
             if (jobs.length > 0) {
                 this.rawData = jobs
                 this.loading = false
                 this.dataEmpty = false
             }
             this.loading = false
        },
    },


}
</script>

<style>

</style>