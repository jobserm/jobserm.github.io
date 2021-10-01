<template>
  <c-button
    as="router-link"
    :to="url"
    backgroundColor="brand.400"
    color="brand.500"
    fontWeight="sm"
    v-bind:target="external && '_blank'"
    v-bind="[$props,$attrs]"
    >{{ text }}</c-button
  >
</template>

<script>
export default {
  name: "ButtonSecondary",
  props: {
    url: String,
    text: String,
    external: Boolean,
  },
};
</script>

<style></style>
