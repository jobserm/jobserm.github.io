<template>
  <c-stack>
    <c-heading align="center" as="h3" size="lg">Login page</c-heading>
    <br>
    <br>
    <login1 />
    <br>
    <br>
  </c-stack>
</template>

<script>
import Login1 from "../components/login-page/login1/login1.vue";

export default {
  name: "Login",
  components: {
    Login1,

  },
};
</script>