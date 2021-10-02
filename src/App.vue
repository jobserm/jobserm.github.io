<template>
  <c-flex v-if="loading" justify="center" align="center" h="100vh">
    <c-spinner color="brand.500" size="xl"/>
  </c-flex>
  <div v-else>
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "./components/Footer.vue";
import liff from "@line/liff";
import backend from "./lib/backend";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
  data: () => {
    return {
      loading: true,
    };
  },
  async beforeCreate() {
    await liff.init({ liffId: process.env.VUE_APP_LIFF_ID });
    if (liff.isLoggedIn()) {
      console.log(liff.getAccessToken());
      backend.defaults.headers.common.Authorization = `Bearer ${liff.getAccessToken()}`;
    }
    this.loading = false;
  },
};
</script>
