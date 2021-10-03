<template>
  <c-stack>
    <hero px="16%" />
    <hero-2 px="16%" />
    <hero-3 px="16%" />
    <hero-4 />
  </c-stack>
</template>

<script>
import Hero from "../components/landing-page/hero1/Hero.vue";
import Hero2 from "../components/landing-page/hero2/Hero2.vue";
import Hero3 from "../components/landing-page/hero3/Hero3.vue";
import Hero4 from "../components/landing-page/hero4/Hero4.vue";

export default {
  name: "Home",
  components: {
    Hero,
    Hero2,
    Hero3,
    Hero4,
  },
};
</script>
