<template>
  <c-stack>
    <employer-hero-1 />
    <employer-hero-2 />
    <employer-hero-3 />
    <employer-hero-4 />
  </c-stack>
</template>

<script>
import EmployerHero1 from "../components/employer/hero1/employer-hero1.vue";
import EmployerHero2 from "../components/employer/hero2/employer-hero-2.vue";
import EmployerHero3 from "../components/employer/hero3/employer-hero-3.vue";
import EmployerHero4 from "../components/employer/hero4/employer-hero-4.vue";
export default {
  components: { EmployerHero1, EmployerHero2, EmployerHero3, EmployerHero4 },
};
</script>

<style></style>
