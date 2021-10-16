<template>
  <c-stack>
    <About1 />
    <About2 />
    <Hero4 />
  </c-stack>
</template>

<script>
import About1 from "../components/about-page/about1.vue";
import About2 from "../components/about-page/about2.vue";
import Hero4 from "../components/landing-page/hero4/Hero4.vue";

export default {
  name: "About",
  components: {
    About1,
    About2,
    Hero4,

  },
};
</script>

<style></style>
