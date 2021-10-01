<script>
import NavBar from "@/components/NavBar";
import Footer from "./components/Footer.vue";
import liff from "@line/liff";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
  async beforeCreate() {
    await liff.init({ liffId: process.env.VUE_APP_LIFF_ID });
  },
};
</script>

<template>
  <div>
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>
