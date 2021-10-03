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
    <c-heading color="white">จำนวนบริษัทและผู้ว่าจ้างที่ไว้ใจเรา</c-heading>
    <c-text pt="2" pb="4" color="white" fontWeight="300"
      >จากทั่วประเทศไทย</c-text
    >
    <c-flex
      :direction="['column', 'row']"
      justifyContent="space-between"
      color="white"
      pt="6"
    >
      <c-stack align="center" w="16rem">
        <c-heading>100+</c-heading>
        <c-text fontWeight="300">ประกาศงาน</c-text>
      </c-stack>

      <c-stack align="center" w="16rem">
        <c-heading>100+</c-heading>
        <c-text fontWeight="300">ฟรีแลนซ์มากความสามารถ</c-text>
      </c-stack>

      <c-stack align="center" w="16rem">
        <c-heading>100+</c-heading>
        <c-text fontWeight="300">บริษัทที่เราเคยจัดหาฟรีแลนซ์ให้</c-text>
      </c-stack>
    </c-flex>
  </c-flex>
</template>

<script>
export default {};
</script>

<style></style>
