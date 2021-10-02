<template> <c-heading> Logout</c-heading> </template>

<script>
import liff from "@line/liff";
export default {
  created: () => {
    liff.logout();
    window.location.href = "/";
  },
};
</script>

<style></style>
