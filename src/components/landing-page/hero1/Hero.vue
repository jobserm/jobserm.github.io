<template>
  <c-flex
    align="center"
    justify="space-around"
    minH="70vh"
    :direction="['column-reverse', 'column-reverse', 'column-reverse', 'row']"
    wrap="wrap"
    pb="8"
    v-bind="[$props, $attrs]"
  >
    <c-stack
      spacing="4"
      :align="['center', 'center', 'flex-start', 'flex-start']"
    >
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
        {{ `งานเทพๆ หาง่ายกว่าที่คิดเยอะ!\nคิดถึงงาน คิดถึงเรา` }}
      </c-heading>
      <c-flex wrap="wrap">
        <button-primary :url="`/register`" :text="`หาคนเข้าทำงาน`" mr="2" />
        <button-secondary :url="`/login`" :text="`ประกาศหางาน`" ml="2" />
      </c-flex>
      <c-text fontSize="xs" color="primary.800" opacity="0.6">
        No credit card required.
      </c-text>
    </c-stack>

    <c-image
      :src="require('../../../assets/hero.svg')"
      :size="['xs', 'sm', 'md', 'lg']"
      rounded="1rem"
    />
  </c-flex>
</template>

<script>
import ButtonPrimary from "../../button/ButtonPrimary.vue";
import ButtonSecondary from "../../button/ButtonSecondary.vue";
export default {
  components: { ButtonPrimary, ButtonSecondary },
  name: "Hero",
};
</script>

<style></style>
