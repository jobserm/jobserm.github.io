<template>
  <div>
    <c-button
      v-if="url"
      as="router-link"
      :to="url"
      backgroundColor="brand.400"
      color="brand.500"
      fontWeight="sm"
      v-bind:target="external && '_blank'"
      v-bind="[$props, $attrs]"
      >{{ text }}</c-button
    >

    <c-button
      v-else
      backgroundColor="brand.400"
      color="brand.500"
      fontWeight="sm"
      v-bind="[$props, $attrs]"
      >{{ text }}</c-button
    >
  </div>
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
