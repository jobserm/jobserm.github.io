<template>
  <c-stack>
    <c-heading align="center" as="h3" size="lg">Register page</c-heading>
    <br>
    <br>
    <register1/>
    <br>
    <br>
  </c-stack>
</template>

<script>
import Register1 from "../components/register-page/register1/register1.vue";

export default {
  name: "Register",
  components: {
    Register1,

  },
};
</script>