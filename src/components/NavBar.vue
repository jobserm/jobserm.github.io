<template>
  <div id="nav-bar">
    <c-flex
      py="4"
      align="center"
      justify="center"
      v-on:click="show = !show"
      :display="['flex', 'none', 'none', 'none']"
    >
      <c-image src="/logo.svg" />
    </c-flex>

    <c-flex
      as="nav"
      px="15vw"
      py="4"
      w="100%"
      align="center"
      :justify="['center', 'center', 'center', 'space-between']"
      wrap="wrap"
      :display="[show ? 'block' : 'none', 'flex', 'flex', 'flex']"
    >
      <!-- LEFT -->
      <c-flex wrap="wrap">
        <router-link to="/about">
          <c-text mx="4">เกี่ยวกับเรา</c-text></router-link
        >
        <router-link to="/contact-us">
          <c-text mx="4">ติดต่อเรา</c-text></router-link
        >
      </c-flex>

      <!-- CENTER -->
      <router-link to="/">
        <c-image src="/logo.svg" :display="['none', 'none', 'flex', 'flex']" />
      </router-link>

      <!-- RIGHT -->
      <c-flex wrap="wrap">
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
  data() {
    return {
      show: false,
    };
  },
};
</script>
