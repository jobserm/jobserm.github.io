<template>
  <c-grid-item col-span="1">
    <c-flex>
      <c-image v-bind:src="icon" mr="4" />
      <c-stack>
        <c-heading size="md">{{ heading }}</c-heading>
        <c-text
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight="1.5"
          white-space="pre-line"
          >{{ description }}</c-text
        >
      </c-stack>
    </c-flex>
  </c-grid-item>
</template>

<script>
export default {
  name: "Hero2-item",
  props: ["icon", "heading", "description"],
};
</script>

<style></style>
