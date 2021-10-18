<template>
  <c-flex flexDir="column" align="center" justify="center">
    <c-stack position="relative" justify="center" align="center">
      <c-image v-bind:src="bgImg" />
      <c-box
        position="absolute"
        top="45%"
        left="50%"
        w="300px"
        textAlign="center"
        transform="translate(-50%, -50%)"
      >
        <c-heading size="md">
          {{ title }}
        </c-heading>
        <c-text>
          {{ comment }}
        </c-text>
      </c-box>
    </c-stack>
    <c-stack justify="center" align="center" pt="4">
      <c-image rounded="full" h="12" v-bind:src="img" alt="name" />
      <c-text>{{ name }}</c-text>
      <c-text mt="-2" fontWeight="xs">{{ role }}</c-text>
    </c-stack>
  </c-flex>
</template>

<script>
export default {
  props: ["title", "comment", "name", "role", "bgImg", "img"],
};
</script>

<style></style>
