<script>
import NavBar from "@/components/NavBar";
import Footer from "./components/Footer.vue";

export default {
  name: "Navbar",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  components: {
    NavBar,
    Footer,
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
