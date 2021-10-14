<template>
  <c-flex flexDir="column">
    <c-stack position="relative">
      <c-image v-bind:src="img" />
      <c-box position="absolute" left="0" top="0" pt="4" pl="4">
        <c-heading size="lg">
          {{ title }}
        </c-heading>
        <c-text>
          {{ comment }}
        </c-text>
        <c-text>
          {{ by }}
        </c-text>
      </c-box>
    </c-stack>
  </c-flex>
</template>

<script>
export default {
  props: ["title", "comment", "by", "img"],
};
</script>

<style></style>
