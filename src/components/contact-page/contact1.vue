<template>
  <c-flex
    align="center"
    justify="center"
    direction="column"
    minW="100%"
    :py="[null, '12']"
    :bgImage="require('./bg.svg')"
    background-repeat="repeat-x"
  >
    <c-heading color="white">Contact Us</c-heading>
    <c-text pt="2" pb="4" color="white" fontWeight="300"
      >Have any questions? We’d love to hear from you.</c-text
    >
    <c-flex
      :direction="['column', 'row']"
      justifyContent="space-between"
      color="white"
      pt="6"
    >
      <c-stack align="center" w="16rem">
        <c-image :src="require('./location.png')" size="100px"></c-image>
        <c-heading>ADDRESS</c-heading>
        <c-text fontWeight="300">Bangkok Thailand 10900 </c-text>
      </c-stack>

      <c-stack align="center" w="16rem">
        <c-image :src="require('./phone.png')" size="100px"></c-image>
        <c-heading>PHONE</c-heading>
        <c-text fontWeight="300">+00 12345678</c-text>
      </c-stack>

      <c-stack align="center" w="16rem">
        <c-image :src="require('./email.png')" size="100px"></c-image>
        <c-heading>EMAIL</c-heading>
        <c-text fontWeight="300">job_serm@KU.th</c-text>
      </c-stack>
    </c-flex>
  </c-flex>
</template>

<script>
export default {};
</script>

<style></style>
