<template>
  <c-flex align="center" justify="space-evenly" minH="70vh" dir="row" mb="16">
    <c-stack spacing="4" align="flex-start">
      <c-heading as="h1" size="xl" fontWeight="bold" color="primary.800">
        Job Serm
      </c-heading>
      <c-heading
        as="h2"
        size="md"
        color="primary.800"
        opacity="0.8"
        fontWeight="normal"
        lineHeight="1.5"
        white-space="pre-line"
      >
        {{
          `งานเทพๆ หาง่ายกว่าที่คิดเยอะ!\n
          คิดถึงงาน คิดถึงเรา`
        }}
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
            >หาคนเข้าทำงาน</c-button
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
      <c-text fontSize="xs" mt="2" color="primary.800" opacity="0.6">
        No credit card required.
      </c-text>
    </c-stack>


      <c-image
        :src="require('../../assets/hero.svg')"
        size="lg"
        rounded="1rem"
      />

  </c-flex>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style></style>
