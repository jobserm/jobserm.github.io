<template>
  <c-stack justify="center" align="center" px="16%" p="20">
    <c-heading pb="6">ประเภทของงาน</c-heading>
    <c-grid
      w="70rem"
      template-rows="repeat(3, 1fr)"
      template-columns="repeat(3, 1fr)"
      gap="6"
    >
      <c-grid-item row-span="2" col-span="1">
        <employer-hero-3-item
          title="รับวาดรูป"
          comment="ภาพเสมือน"
          by="by อเล็ก"
          :img="require('./1.svg')"
        />
      </c-grid-item>
      <c-grid-item row-span="1" col-span="2">
        <employer-hero-3-item
          title="สอนพิเศษ"
          comment="Math, Science"
          by="by แอสต้า"
          :img="require('./2.svg')"
      /></c-grid-item>
      <c-grid-item row-span="1" col-span="1">
        <employer-hero-3-item
          title="รับพาสัตว์เลี้ยงไปเดินเล่น"
          comment="สุนัข แมว"
          by="by เชน"
          :img="require('./3.svg')"
        />
      </c-grid-item>
      <c-grid-item col-span="1" row-span="2">
        <employer-hero-3-item
          title="เทรนเนอร์ส่วนตัว"
          comment="โยคะร้อน"
          by="by แอล"
          :img="require('./4.svg')"
        />
      </c-grid-item>
      <c-grid-item col-span="2" row-span="1">
        <employer-hero-3-item
          title="สอนดริปกาแฟ"
          comment="ภาพเสมือน"
          by="by เคน"
          :img="require('./5.svg')"
        />
      </c-grid-item>
    </c-grid>
  </c-stack>
</template>

<script>
import employerHero3Item from "./employer-hero-3-item.vue";
export default {
  components: { employerHero3Item },
};
</script>

<style></style>
