<template>
  <c-stack
    wrap="wrap"
    rounded="1rem"
    p="4"
    h="100%"
    shadow="md"
    alignContent="space-between"
  >
    <c-heading size="md" pb="2">{{ heading }}</c-heading>

    <c-image v-bind:src="icon" mr="4" w="3rem" marginTop="auto"/>
  </c-stack>
</template>

<script>
export default {
  name: "Hero3-item",
  props: ["icon", "heading"],
};
</script>

<style></style>
