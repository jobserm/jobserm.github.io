<template>
  <div>
    <loading v-if="loading" />
    <c-stack mt="2rem">
      <ve-table :columns="columns" :table-data="tableData" />
      <c-box w="100%">
        <c-text fontSize="xl" textAlign="center" mt="2rem" v-show="dataEmpty"
          >Data empty</c-text
        >
      </c-box>
      <c-box mt="2rem" textAlign="right">
        <ve-pagination
          :total="totalCount"
          :page-index="pageIndex"
          :page-size="pageSize"
          @on-page-number-change="pageNumberChange"
          @on-page-size-change="pageSizeChange"
        />
      </c-box>
    </c-stack>
  </div>
</template>

<script>
import Authservice from "../../../services/Authservice";
import { CBadge } from "@chakra-ui/vue";
import backendInstance from "../../../services/backendInstance";

export default {
  data() {
    return {
      pageIndex: 1,
      pageSize: 10,
      columns: [
        {
          field: "id",
          key: "a",
          type: "expand",
          title: "ID",
          align: "center",
        },
        {
          field: "comment",
          key: "b",
          title: "Comment",
          align: "left",
          renderBodyCell: ({ row, column, rowIndex }, h) => {
            const text = row[column.field];
            return (
              <span>
                <a
                  class="test-text"
                  onClick={() => this.getUserByID(row["id"])}
                  style="color:#1890ff;cursor:pointer;"
                >
                  {text}
                </a>
              </span>
            );
          },
        },
        {
          field: "rating",
          key: "c",
          title: "rating",
          width: 300,
          align: "left",
        },
        {
          field: "user",
          key: "d",
          title: "Reviewee",
          width: "",
          align: "left",
        },
      ],
      rawData: [],
      loading: false,
      dataEmpty: true,
    };
  },
  computed: {
    tableData() {
      const { pageIndex, pageSize } = this;
      return this.rawData.slice(
        (pageIndex - 1) * pageSize,
        pageIndex * pageSize
      );
    },
    totalCount() {
      return this.rawData.length;
    },
  },
  async created() {
    await this.fetchReviews();
  },
  methods: {
    async fetchReviews() {
      this.loading = true;
      let data = await backendInstance.get("/api/reviews");
      if (data.length != 0) {
        this.rawData = data.data;
        this.loading = false;
        this.dataEmpty = false;
      }
      this.loading = false;
    },
    pageNumberChange(pageIndex) {
      this.pageIndex = pageIndex;
    },
    pageSizeChange(pageSize) {
      this.pageIndex = 1;
      this.pageSize = pageSize;
    },
    async getUserByID(id) {
      // let user = await Authservice.getUserById(id)
      let res = await backendInstance.get(`/api/users/${id}`);
      this.$emit("parentGetUserByID", res.data);
    },
  },
};
</script>

<style></style>
