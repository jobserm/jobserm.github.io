<template>
  <div id="nav-bar">
    <c-flex as="nav" px="15vw" py="4" align="center" justify="space-between">
      <!-- LEFT -->
      <c-flex>
        <router-link to="/about">
          <c-text mx="4">เกี่ยวกับเรา</c-text></router-link
        >
        <router-link to="/contact-us">
          <c-text mx="4">ติดต่อเรา</c-text></router-link
        >
      </c-flex>

      <!-- CENTER -->
      <router-link to="/">
        <img src="/logo.svg" />
      </router-link>

      <!-- RIGHT -->
      <c-flex>
        <button-secondary :url="`/login`" :text="`เข้าสู่ระบบ`" mx="4" />
        <button-primary :url="`/register`" :text="`สมัครสมาชิก`" mx="4" />
      </c-flex>
    </c-flex>
    <c-divider my="-0.5" />
  </div>
</template>

<script>
import ButtonPrimary from "./button/ButtonPrimary.vue";
import ButtonSecondary from "./button/ButtonSecondary.vue";
export default {
  components: { ButtonPrimary, ButtonSecondary },
  name: "Navbar",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  computed: {
    colorMode() {
      return this.$chakraColorMode();
    },
  },
  watch: {
    colorMode(newVal) {
      if (!process.client) {
        return;
      }
      try {
        localStorage.setItem("chakra_ui_docs_color_mode", newVal);
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    if (!process.client) {
      return;
    }
    try {
      const savedColorMode = localStorage.getItem("chakra_ui_docs_color_mode");
      if (!savedColorMode) {
        return;
      }
      if (
        savedColorMode &&
        this.colorMode &&
        this.colorMode !== savedColorMode
      ) {
        this.$toggleColorMode();
      }
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
