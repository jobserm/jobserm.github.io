<template>
  <div>
    <c-button
      v-if="url"
      as="router-link"
      :to="url"
      backgroundColor="brand.500"
      color="white"
      fontWeight="sm"
      v-bind:target="external && '_blank'"
      v-bind="[$props, $attrs]"
      >{{ text }}</c-button
    >

    <c-button
      v-else
      as="router-link"
      :to="url"
      backgroundColor="brand.500"
      color="white"
      fontWeight="sm"
      v-bind:target="external && '_blank'"
      v-bind="[$props, $attrs]"
      >{{ text }}</c-button
    >
  </div>
</template>

<script>
export default {
  name: "ButtonPrimary",
  props: {
    url: String,
    text: String,
    external: Boolean,
  },
};
</script>

<style></style>
