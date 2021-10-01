<template>
  <c-stack px="16vw">
    <hero />
    <hero-2 />
  </c-stack>
</template>

<script>
import Hero from "../components/landing-page/Hero.vue";
import Hero2 from "../components/landing-page/hero2/Hero2.vue";

export default {
  name: "Home",
  components: {
    Hero,
    Hero2,
  },
};
</script>
