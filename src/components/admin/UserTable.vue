<template>
  <div>
    <loading v-if="loading"/>
    <c-stack mt="2rem">
      <ve-table
        :columns="columns"
        :table-data="tableData"
      />
      <c-box w="100%">
        <c-text fontSize="xl" textAlign="center" mt="2rem" v-show="dataEmpty">Data empty</c-text>
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
import UserStore from "../../store/UserStore"
import Authservice from "../../services/Authservice";
import axios from 'axios'
import { CBadge } from '@chakra-ui/vue';
import AuthUser from '../../store/AuthUser';
import JobApi from '../../store/JobApi';

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
          field: "name",
          key: "b",
          title: "Name",
          align: "left",
          renderBodyCell: ({ row, column, rowIndex }, h) => {
              const text = row[column.field];
              return (
                  <span>
                      <a
                          class="test-text"
                          onClick={() => this.getUserByID(row['id'])}
                          style="color:#1890ff;cursor:pointer;"
                      >
                          {text}
                      </a>
                  </span>
              );
          },
        },
        {
          field: "lastname",
          key: "c",
          title: "lastname",
          width: 300,
          align: "left",
        },
        {
          field: "address",
          key: "d",
          title: "Address",
          width: "",
          align: "left",
        },
        {
          field: "phone",
          key: "e",
          title: "phone",
          width: "",
          align: "left",
        },
        {
          field: "facebook",
          key: "f",
          title: "facebook",
          width: "",
          align: "left",
        },
        {
          field: "activation",
          key: "g",
          title: "activation",
          width: "",
          align: "left",
          renderBodyCell: ({ row, column, rowIndex }, h) => {
              const text = row[column.field];
              if (text === 1) {
                return (
                  <CBadge variant-color="green" mx="2">activated</CBadge>
                )
              }
              return (
                  <CBadge variant-color="red" mx="2">deactivated</CBadge>
              )
          },
        },
      ],
      rawData: [],
      loading: true,
      dataEmpty: true,
      id: ''
    };
  },
  computed: {
    tableData() {
      const { pageIndex, pageSize } = this
      return this.rawData.slice((pageIndex - 1) * pageSize, pageIndex * pageSize)
    },
    totalCount() {
      return this.rawData.length
    }
  },
  async created() {
    await this.fetchUsers()
    UserStore.watch(
      (state) => {
        return UserStore.getters.getUsers
      },
      (newValue, oldValue) => {
        this.rawData = newValue
      }
    )
  },
  methods: {
    async fetchUsers() {      
      await UserStore.dispatch('fetchUsers')
      let data = UserStore.getters.getUsers
      if (data.length != 0) {
        this.rawData = data
        this.loading = false
        this.dataEmpty = false
      }
      this.loading = false
    },
    pageNumberChange(pageIndex) {
      this.pageIndex = pageIndex
    },
    pageSizeChange(pageSize) {
      this.pageIndex = 1
      this.pageSize = pageSize
    },
    async getUserByID(id) {
      this.id = id;
      let user = await Authservice.getUserById(id)
      user.id = this.id
      this.$emit('parentGetUserByID', user)
    },
  }
};
</script>

<style>

</style>
