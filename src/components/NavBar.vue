<template>
  <div id="nav-bar">
    <c-flex as="nav" px="15vw" py="4" align="center" justify="space-between">
      <!-- LEFT -->
      <c-flex>
        <router-link to="/about">
          <c-text mx="4">เกี่ยวกับเรา</c-text></router-link
        >
        <router-link to="/about">
          <c-text mx="4">ติดต่อเรา</c-text></router-link
        >
      </c-flex>

      <!-- CENTER -->
      <router-link to="/">
        <img src="/logo.svg" />
      </router-link>

      <!-- RIGHT -->
      <c-flex>
        <!-- <c-icon-button
          :icon="colorMode === 'light' ? 'moon' : 'sun'"
          @click="$toggleColorMode"
          :aria-label="
            `Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`
          "
        /> -->
        <c-button
          backgroundColor="brand.400"
          color="brand.500"
          as="router-link"
          to="/about"
          mx="4"
          fontWeight="sm"
          >เข้าสู่ระบบ</c-button
        >
        <c-button
          backgroundColor="brand.500"
          color="white"
          as="router-link"
          to="/about"
          mx="4"
          fontWeight="sm"
          >สมัครสมาชิก</c-button
        >
      </c-flex>
    </c-flex>
    <c-divider my="-0.5" />
  </div>
</template>

<script>
export default {
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
