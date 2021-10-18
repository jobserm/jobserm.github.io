<template>
  <div id="nav-bar">
    <c-simple-grid
      :columns="3"
      as="nav"
      px="5vw"
      py="4"
      w="100%"
      alignItems="center"
      justifyContent="space-around"
      :display="['block', 'grid', 'grid', 'grid']"
    >
      <c-flex
        wrap="wrap"
        align="center"
        justify="center"
        :direction="['column', 'row', 'row', 'row']"
      >
        <router-link to="/about">
          <c-text mx="4">เกี่ยวกับเรา</c-text></router-link
        >
        <router-link to="/contact">
          <c-text mx="4">ติดต่อเรา</c-text></router-link
        >

        <div v-if="isAuthen()">
          <router-link to="/postjob">
            <c-text ms="80">โพสต์งาน</c-text></router-link
          >
        </div>

        <div v-if="isAuthen()">
          <router-link to="/freelance">
            <c-text ms="5">เริ่มหาฟรีแลนซ์</c-text></router-link
          >
        </div>
      </c-flex>

      <c-flex
        wrap="wrap"
        align="center"
        justify="center"
        :direction="['column', 'row', 'row', 'row']"
      >
        <router-link to="/">
          <c-image src="/logo.svg" />
        </router-link>
      </c-flex>

      <c-flex wrap="wrap" :direction="['column', 'row', 'row', 'row']">
        <div v-if="!isAuthen()">
          <button-secondary :text="`เข้าสู่ระบบ`" :url="`/login`" mx="4" />
        </div>

        <div v-if="isAuthen()">
          <button-primary :url="`/profiles`" :text="`โปรไฟล์`" mx="4" />
        </div>

        <div v-if="isAuthen()">
          <button-secondary :text="`ออกจากระบบ`" :url="`/logout`" mx="4" />
        </div>
        
        <div v-if="!isAuthen()">
          <button-primary :url="`/register`" :text="`สมัครสมาชิก`" mx="4" />
        </div>
        
      </c-flex>
    </c-simple-grid>

    <c-divider my="-0.5" />
  </div>
</template>

<script>
import ButtonPrimary from "./button/ButtonPrimary.vue";
import ButtonSecondary from "./button/ButtonSecondary.vue";
import AuthUser from "../store/AuthUser";

export default {
  components: { ButtonPrimary, ButtonSecondary },
  name: "Navbar",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  data() {
    return {
      user: {},
      show: false,
    };
  },

  methods: {
    isAuthen() {
      return AuthUser.getters.isAuthen
    },

    logout() {
      AuthUser.dispatch("logout");
      if (this.$router.currentRoute.path != "/") {
        this.$router.push("/");
      }
    }
  },
};
</script>
