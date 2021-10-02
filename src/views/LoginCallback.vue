<template>
  <c-box>
    <c-heading>
      This page can check wherever users need to input more infomation or back
      to homepage</c-heading
    ></c-box
  >
</template>

<script>
import backend from "../lib/backend";
export default {
  beforeMount: async () => {
    console.log("/userinfo");
    backend.get("/userinfo");
  },
};
</script>

<style></style>
