<template>
  <c-stack justify="center" align="center" bgColor="#F4F5F7" px="16%" p="20">
    <c-stack justify="center" align="center" pb="8">
      <c-heading>Our Clients Speak</c-heading>
      <c-text>We have been working with clients around Thailand.</c-text>
    </c-stack>
    <c-simple-grid :columns="[1, 2, 2, 3]" spacing="4">
      <about2Item
        title="Efficient Platform"
        comment="เว็บไซต์ใช้ง่ายครับ โพสต์รับสมัครงานไปแป๊ปเดียว ก็มีคนติดต่อมาแล้วครับ "
        name="Jane Cooper"
        role="จากใจคนลองใช้จริง"
        :bgImg="require('./1.svg')"
        :img="require('./Person2.jpg')"
      />
      <about2Item
        title="Intuitive Design"
        comment="เว็บไซต์ใช้งานได้ง่ายและสะดวก คนที่ไม่เคยใช้งานมาก่อนก็สามารถใช้ได้ โดยไม่ต้องอ่านวิธีการใช้งาน"
        name="Alex Lee"
        role="จากใจคนใช้งาน"
        :bgImg="require('./1.svg')"
        :img="require('./Person1.jpg')"
      />
      <about2Item
        title="Mindblowing Service"
        comment="ประจับใจลูกจ้างมากค่ะ ทำงานดีมากค่ะ "
        name="Taylor Andrea"
        role="จากใจคนจ้างงาน"
        :bgImg="require('./1.svg')"
        :img="require('./Person3.jpg')"
      />
    </c-simple-grid>
  </c-stack>
</template>

<script>
import about2Item from "./about2item.vue";
export default {
  components: { about2Item },
};
</script>

<style></style>
