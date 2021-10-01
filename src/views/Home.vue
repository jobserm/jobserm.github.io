<template>
  <c-stack px="16vw">
    <hero />
    <hero-2 />
    <hero-3 />
  </c-stack>
</template>

<script>
import Hero from "../components/landing-page/hero1/Hero.vue";
import Hero2 from "../components/landing-page/hero2/Hero2.vue";
import Hero3 from "../components/landing-page/hero3/Hero3.vue";

export default {
  name: "Home",
  components: {
    Hero,
    Hero2,
    Hero3,
  },
};
</script>
