<template>
  <div id="nav-bar">
    <c-simple-grid
      :columns="3"
      as="nav"
      px="15vw"
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
        <router-link to="/contact-us">
          <c-text mx="4">ติดต่อเรา</c-text></router-link
        >
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
        <button-secondary :text="`เข้าสู่ระบบ`" :url="`/login`" mx="4" />

        <button-primary :url="`/register`" :text="`สมัครสมาชิก`" mx="4" />
      </c-flex>
    </c-simple-grid>

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
