<template>
    <div>
        <!-- <loading v-if="loading"/> -->
        <ve-table
            :fixed-header="true"
            :columns="columns"
            :table-data="tableData"
        />
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

export default {
    data() {
        return {
            columns: [
                { field: "id", key: "a", title: "ID", align: "center" },
                { field: "name", key: "b", title: "Name", align: "center" },
            ],
            // loading: true,
            rawData: [],
            pageIndex: 1,
            pageSize: 12
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

    methods: {
        pageNumberChange( pageIndex ) {
            this.pageIndex = pageIndex
        },
        pageSizeChange( pageSize ) {
            this.pageIndex = 1
            this.pageSize = pageSize
        },

         async fetchUsers() {
            // await CategoryStore.dispatch('fetchData')
            // let data = CategoryStore.getters.getCategories

            // this.rawData = data
        },
    },


}
</script>

<style>

</style>