<template>
  <div>
    <Loading v-if="loading" />
      <c-stack w="100%" my="5rem">
          <c-text fontSize="4xl" textAlign="center">ข้อมูลผู้ใช้</c-text>
          <c-flex ml="2rem">
            <c-avatar v-if="user.name === undefined || user.lastname === undefined" size="2xl"/>
            <c-avatar v-if="user.name !== undefined || user.lastname !== undefined" 
                v-bind:name="user.name + ' ' + user.lastname" size="2xl"/>
            <c-stack ml="3rem">
              <c-text v-if="user.name === undefined || user.lastname === undefined">ชื่อ - นามสกุล: {{ "-" }}</c-text>
              <c-text v-if="user.name !== undefined || user.lastname !== undefined">ชื่อ - นามสกุล: {{ user.name + ' ' + user.lastname }}</c-text>
              <c-text>วัน/เดือน/ปีเกิด: {{ user.birthdate || "-" }} </c-text>
              <c-text>เพศ: {{ user.gender || "-" }}</c-text>
              <c-text>เบอร์โทรศัพท์: {{ user.phone || "-" }}</c-text>
              <c-text>ที่อยู่: {{ user.address || "-" }}</c-text>
              <c-text>Facebook: {{ user.facebook || "-" }}</c-text>
              <c-text>LineID: {{ user.line || "-" }}</c-text>
              <c-text>Email: {{ user.email || "-" }}</c-text>
              <c-text>
                Activation Status: 
                <c-button v-if="user.activation == undefined" mx="2">{{ "-" }}</c-button>
                <c-button v-if="user.activation == 0" mx="2" variant-color="green" height="30px" width="100px" @click="activationStatus">{{ "ACTIVATED" }}</c-button>
                <c-button v-if="user.activation == 1" mx="2" variant-color="red" height="30px" width="100px" @click="activationStatus">{{ "DEACTIVATED" }}</c-button>
              </c-text>
            </c-stack>
          </c-flex>
      </c-stack>
  </div>
</template>

<script>
import AuthUser from '../../store/AuthUser';
import Axios from 'axios';
import Loading from '../../components/miscellaneous/Loading.vue'
import UserStore from '../../store/UserStore';

export default {
  components: {
    Loading,
  },
  props: ['user'],
  data() {
    return {
      loading: false,
      toggleStatus: ""
    }
  },
  methods: {
    async activationStatus() {
      this.toggleStatus = this.user.activation
      console.log(this.toggleStatus)
      let headers = {
        'Authorization': `Bearer ${AuthUser.getters.jwt}`
      }
      try {
        this.loading = true
        let res = await Axios.get(`http://localhost:8000/api/users/${this.user.id}/toggle-activation`, {
          headers: headers
        });
        if (res.status === 200) {
          await UserStore.dispatch('fetchUsers', headers)
          this.toggleStatus = this.toggleStatus === 1 ? 0 : 1
          console.log(this.user.activation)
          this.loading = false
        }
      } catch (e) {
        console.log(e.message)
      }
    }
  }
}
</script>

<style>

</style>