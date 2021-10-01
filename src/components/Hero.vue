<template>
  <c-flex align="center" justify="space-between" minH="70vh" dir="row" mb="16">
    <c-stack spacing="4" align="flex-start" ml="16vw">
      <c-heading
        as="h1"
        size="xl"
        fontWeight="bold"
        color="primary.800"
        textAlign="left"
      >
        {{ title }}
      </c-heading>
      <c-heading
        as="h2"
        size="md"
        color="primary.800"
        opacity="0.8"
        fontWeight="normal"
        lineHeight="1.5"
        textAlign="left"
        white-space="pre-line"
      >
        {{ subtitle }}
      </c-heading>
      <c-flex>
        <c-link v-bind:to="{ ctaLink }">
          <c-button
            backgroundColor="brand.500"
            color="white"
            as="router-link"
            to="/about"
            fontWeight="sm"
            mr="2"
            >{{ ctaText }}</c-button
          >
        </c-link>
        <c-link v-bind:to="{ ctaLink }">
          <c-button
            backgroundColor="brand.400"
            variant="outline"
            color="brand.500"
            as="router-link"
            to="/about"
            fontWeight="sm"
            mx="2"
            >ประกาศหางาน</c-button
          >
        </c-link>
      </c-flex>
      <c-text
        fontSize="xs"
        mt="2"
        textAlign="left"
        color="primary.800"
        opacity="0.6"
      >
        No credit card required.
      </c-text>
    </c-stack>
    <c-box>
      <img src="../assets/hero.svg" size="100%" rounded="1rem" shadow="2xl" />
    </c-box>
  </c-flex>
</template>

<script>
export default {
  name: "Hero",
  props: ["title", "subtitle", "ctaText", "image"],
};
</script>

<style></style>
