<template>
  <c-stack justify="center" align="center" bgColor="#F4F5F7" px="16%" p="20">
    <c-stack justify="center" align="center" pb="8">
      <c-heading>พนักงานคุณภาพกำลังต้องการงาน</c-heading>
      <c-text>ใส่ข้อมูลงานของคุณเพื่อรับคนได้เลย</c-text>
    </c-stack>
    <c-simple-grid :columns="[1, 2, 2, 3]" spacing="4">
      <employer-hero-2-item
        title="หางานทำแอพ"
        comment="ทำแอพได้ครับ"
        name="Tim"
        role="Programmer"
        :bgImg="require('./1.svg')"
        :img="require('./people.svg')"
      />
      <employer-hero-2-item
        title="หางานเขียนโค้ด"
        comment="ทำเวปเป็นครับ"
        name="Tim"
        role="Programmer"
        :bgImg="require('./1.svg')"
        :img="require('./people.svg')"
      />
      <employer-hero-2-item
        title="หางานแต่งรูป"
        comment="แต่งรูปเก่งค่ะ"
        name="Tim"
        role="Programmer"
        :bgImg="require('./1.svg')"
        :img="require('./people.svg')"
      />
      <employer-hero-2-item
        title="เป็นมวยครับ"
        comment="รับเป็นการ์ดครับ ดูแลรักษาอย่างดี ท้าต่อยได้ครับ อยากลองฝีมือ "
        name="Tim"
        role="Programmer"
        :bgImg="require('./1.svg')"
        :img="require('./people.svg')"
      />
      <employer-hero-2-item
        title="หางาน part time"
        comment="มีเวลาว่างตอนเย็นครับ"
        name="Tim"
        role="Programmer"
        :bgImg="require('./1.svg')"
        :img="require('./people.svg')"
      />
      <employer-hero-2-item
        title="ขายแป้ง"
        comment="หางานครับ"
        name="Tim"
        role="Programmer"
        :bgImg="require('./1.svg')"
        :img="require('./people.svg')"
      />
    </c-simple-grid>
  </c-stack>
</template>

<script>
import employerHero2Item from "./employer-hero-2-item.vue";
export default {
  components: { employerHero2Item },
};
</script>

<style></style>
