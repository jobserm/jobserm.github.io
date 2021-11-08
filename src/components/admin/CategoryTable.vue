<template>
    <div>
        <loading v-if="isLoading"/>
        <ve-table
            :fixed-header="true"
            :columns="columns"
            :table-data="tableData"
        />
        <c-box w="100%">
            <c-text fontSize="xl" textAlign="center" mt="2rem" v-show="dataEmpty"
            >Data empty</c-text>
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
import CategoryStore from "../../store/CategoryStore"

export default {
    data() {
        return {
            columns: [
                { field: "id", key: "a", title: "ID", align: "center" },
                { field: "category_name", key: "b", title: "Category Name", align: "left", 
                renderBodyCell: ({ row, column, rowIndex }, h) => {
                    const text = row[column.field];
                    return (
                        <span>
                            <a 
                                onClick={() => this.getCategoryById(row['id'])}
                                style="color:#1890ff;cursor:pointer;"
                            >
                                {text}
                            </a>
                        </span>
                    )
                }},
                { field: "job_count", key: "c", title: "จำนวนงานในหมวดหมู่", align: "left" },
            ],
            isLoading: true,
            rawData: [],
            pageIndex: 1,
            pageSize: 10,
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
        await this.fetchCategories();
        this.$root.$refs.categoryTable = this
    },
    methods: {
        pageNumberChange( pageIndex ) {
            this.pageIndex = pageIndex
        },
        pageSizeChange( pageSize ) {
            this.pageIndex = 1
            this.pageSize = pageSize
        },

         async fetchCategories() {
             console.log('fetchCategories')
            this.isLoading = true
            await CategoryStore.dispatch('fetchData')
            let categories = CategoryStore.getters.getCategories
            if (categories.length > 0) {
                this.rawData = categories
                this.isLoading = false
                this.dataEmpty = false
             }
            this.isLoading = false
        },
        async getCategoryById(id) {
            this.isLoading = true
            await CategoryStore.dispatch('fetchCategoryById', id)
            let category = CategoryStore.getters.getCategory
            this.$emit('parentGetCategoryById', category)
            this.isLoading = false
        },
    },


}
</script>

<style>

</style>