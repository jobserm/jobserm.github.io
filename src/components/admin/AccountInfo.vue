<template>
  <div>
      <c-stack w="100%">
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
                <c-badge v-if="user.activation == undefined" mx="2">{{ "-" }}</c-badge>
                <c-badge v-if="user.activation == 1" mx="2" variant-color="green">{{ "activated" }}</c-badge>
                <c-badge v-if="user.activation == 0" mx="2" variant-color="red">{{ "deactivated" }}</c-badge>
              </c-text>
            </c-stack>
          </c-flex>
      </c-stack>
  </div>
</template>

<script>
export default {
  props: ['user']
}
</script>

<style>

</style>