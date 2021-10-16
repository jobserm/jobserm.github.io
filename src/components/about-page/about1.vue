<template>
<div :style="image">
  <c-heading size="xl" align="center">What’s Job’Serm ?</c-heading>
  <c-heading size="xl" align="right" color="#472760">Finding and Hiring jobs from </c-heading>
  <c-heading size="xl" align="right" color="#472760">anywhere, anytime.</c-heading>
  <c-stack :spacing="5">
  <c-box :p="5" shadow="md" border-width="1px">
    <c-heading>See the Vue</c-heading>
    <c-text :mt="4">Vue makes front-end development a breeze.</c-text>
  </c-box>
  <c-box :p="5" shadow="md" border-width="1px">
    <c-heading>Job' Serm</c-heading>
    <c-text :mt="4">
      Job’ Serm เป็นระบบแพลตฟอร์มในการหางานและจ้างงาน ที่ครอบคลุมการให้บริการทั้งฝั่ง 
      ผู้ว่าจ้างหรือบริษัทที่ต้องการหาคน และคนที่ต้องการหางาน ซึ่งถูกออกแบบมาตอบรับความต้องการที่ว่า 
      การหางานเสริมที่จ้างงานรายย่อย หรืองานที่จ้างชั่วคราว หาได้ยากและไม่สะดวก 
      โดยรวบรวมงานหลากหลายประเภท หลากหลายสไตล์ไว้ในที่เดียว ไม่ว่าคุณต้องการหาคนจากที่ใดก็ตาม 
      หรือสมัครงานจากที่ใดก็ตาม คุณก็สามารถทำได้ง่ายและสะดวกสบาย ผ่านการใช้งานระบบแพลตฟอร์มของเรา
      </c-text>
  </c-box>
</c-stack>
  <br>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: { backgroundImage: "url(https://raw.githubusercontent.com/jobserm/jobserm.github.io/feature/about-page/src/components/about-page/Group1.svg)" }
    };
  }
};
</script>

<style>
</style>