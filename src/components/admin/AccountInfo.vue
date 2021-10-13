<template>
  <div>
      <c-stack w="100%">
          <c-text fontSize="4xl" textAlign="center">ข้อมูลผู้ใช้</c-text>
          <c-flex ml="2rem">
            <c-avatar name="Patipan Boonsimma" size="2xl"/>
            <c-stack ml="3rem">
              <c-text>ชื่อ - นามสกุล: ปฏิภาณ บุญสิมมา</c-text>
              <c-text>วัน/เดือน/ปีเกิด: 30/08/2543 (21 ปี)</c-text>
              <c-text>เพศ: ชาย</c-text>
              <c-text>เบอร์โทรศัพท์: 0955347386</c-text>
              <c-text>ที่อยู่: Hogwarts</c-text>
              <c-text>Facebook: Patipan Boonsimma</c-text>
              <c-text>LineID: iitong30</c-text>
              <c-text>Email: p.patisxx@outlook.com</c-text>
              <c-text>Activation Status: Active</c-text>
            </c-stack>
          </c-flex>
      </c-stack>
  </div>
</template>

<script>
import UserStore from "../../store/UserStore"
export default {
  data() {
    return {
      users: {},
    }
  },
  async created() {
    // await this.fetchUsers()
  },
  methods: {
    async fetchUsers() {
      await UserStore.dispatch('fetchUsers')
      let data = UserStore.getters.getUsers
      this.users = data
    }
  }
}
</script>

<style>

</style>