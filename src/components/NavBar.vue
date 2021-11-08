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

        <div v-if="isAuthen() && !isAdmin()">
          <router-link to="/postjob">
            <c-text ms="80">โพสต์งาน</c-text></router-link
          >
        </div>

        <div v-if="isAuthen() && !isAdmin()">
          <router-link to="/all-freelance">
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

         <c-flex align="center" w="30%" d="inline-grid" v-if="isAuthen() && isAdmin()">
            <c-menu>
                <c-menu-button 
                justifyContent="space-around"
                py=1.8rem
                >
                    <c-avatar size="md"/>
                    <c-flex flexDirection="column">
                        <c-heading size="sm">{{ user.name }}</c-heading>
                        <c-text>Admin</c-text>
                    </c-flex>
                </c-menu-button>
            </c-menu>
        </c-flex>
        <div v-if="isAuthen() && !isAdmin()">
          <button-secondary :url="`/userJobApply`" :text="`งานที่คุณสนใจ`" mx="4" />
        </div>

        <div v-if="isAuthen() && !isAdmin()">
          <button-secondary :text="`โพสต์ของคุณ`" :url="`/userJob`" mx="4" />
        </div>
        <!-- <div v-if="isAuthen() && !isAdmin()">
          <button-secondary :text="`งานที่คุณสนใจ`" :url="`/login`" mx="4" />
        </div> -->
        <div v-if="!isAuthen()">
          <button-primary :text="`เข้าสู่ระบบ`" :url="`/login`" mx="4" />
        </div>

        <div v-if="isAuthen()">
          <button-primary :text="`ออกจากระบบ`" :url="`/logout`" mx="12" />
        </div>
        
        <div v-if="!isAuthen()">
          <button-primary :url="`/register`" :text="`สมัครสมาชิก`" mx="4" />
        </div>

        <div v-if="isAuthen() && !isAdmin()">
          <router-link to="/auth-profile">
            <c-image w="3rem" h="3rem" src="https://cdn-icons-png.flaticon.com/512/64/64572.png" />
          </router-link>
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

  created() {
    this.getUser()
  },

  methods: {
    isAuthen() {
      return AuthUser.getters.isAuthen
    },

    isAdmin() {
      return AuthUser.getters.isAdmin
    },

    getUser() {
      this.user = AuthUser.getters.user
    }
  },
};
</script>
