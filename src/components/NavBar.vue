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
      justify="space-around"
      wrap="wrap"
      :display="[show ? 'block' : 'none', 'flex', 'flex', 'flex']"
      :direction="['column', 'row', 'row', 'row']"
    >
      <!-- LEFT -->
      <c-flex wrap="wrap" :direction="['column', 'row', 'row', 'row']">
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
      <c-flex
        v-if="profile.pictureUrl"
        wrap="wrap"
        align="center"
        :direction="['column', 'row', 'row', 'row']"
      >
        <router-link to="/profile">
          <c-text mx="4">แก้ไขข้อมูล</c-text></router-link
        >
        <c-menu mx="4">
          <c-menu-button
            as="box"
            bgColor="transparent"

            :_hover="{ bg: 'transparent' }"
          >
            <c-image :src="profile.pictureUrl" boxSize="3rem" rounded="50%" />
          </c-menu-button>
          <c-menu-list>
            <c-menu-group :title="profile.displayName || 'Profile'">
              <router-link to="/logout">
                <c-menu-item textDecoration="none">Logout</c-menu-item>
              </router-link>
            </c-menu-group>
          </c-menu-list>
        </c-menu>
      </c-flex>

      <c-flex v-else wrap="wrap" :direction="['column', 'row', 'row', 'row']">
        <c-button
          @click="login"
          backgroundColor="brand.400"
          color="brand.500"
          fontWeight="sm"
          mx="4"
          >เข้าสู่ระบบ</c-button
        >
        <button-primary :url="`/register`" :text="`สมัครสมาชิก`" mx="4" />
      </c-flex>
    </c-flex>

    <c-divider my="-0.5" />
  </div>
</template>

<script>
import ButtonPrimary from "./button/ButtonPrimary.vue";
import liff from "@line/liff";

export default {
  components: { ButtonPrimary },
  name: "Navbar",
  data: () => ({
    show: false,
    profile: {},
  }),
  methods: {
    login: async () => {
      liff.login({
        redirectUri: `https://${window.location.hostname +
          (window.location.port != 80
            ? `:${window.location.port}`
            : "")}/login-callback`,
      });
    },
  },
  beforeMount() {
    (async () => {
      if (liff.isLoggedIn()) {
        this.profile = await liff.getProfile();
        console.log(this.profile);
      }
    })();
  },
};
</script>
