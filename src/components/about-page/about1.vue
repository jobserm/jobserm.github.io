<template>
<div :style="image">
  <br>
  <c-heading as="h1" size="2xl" align="center">What’s Job’Serm ?</c-heading>
  <br>
  <c-heading as="h1" size="xl" align="right" color="#472760">Finding and Hiring jobs from </c-heading>
  <c-heading as="h1" size="xl" align="right" color="#472760">anywhere, anytime.</c-heading>
  <c-stack :spacing="5">
  <br>
  <c-box :p="5" shadow="md" border-width="0px">
    <c-text :mt="4">
      Job’ Serm เป็นระบบแพลตฟอร์มในการหางานและจ้างงาน ที่ครอบคลุมการให้บริการทั้งฝั่ง 
      ผู้ว่าจ้างหรือบริษัทที่ต้องการหาคน และคนที่ต้องการหางาน ซึ่งถูกออกแบบมาตอบรับความต้องการที่ว่า 
      การหางานเสริมที่จ้างงานรายย่อย หรืองานที่จ้างชั่วคราว หาได้ยากและไม่สะดวก 
      โดยรวบรวมงานหลากหลายประเภท หลากหลายสไตล์ไว้ในที่เดียว ไม่ว่าคุณต้องการหาคนจากที่ใดก็ตาม 
      หรือสมัครงานจากที่ใดก็ตาม คุณก็สามารถทำได้ง่ายและสะดวกสบาย ผ่านการใช้งานระบบแพลตฟอร์มของเรา
      </c-text>
  </c-box>
  <br>
  <br>

  <c-box :p="5" shadow="md" border-width="1px">
    <c-heading color="#472760">Finding jobs</c-heading>
    <c-text :mt="4">
      คุณสามารถมองหางานได้ทุกเมื่อที่คุณต้องการ 
      ไม่ว่าจะเป็นงานพาร์ทไทม์ งานจ้างรายวัน งานจ้างรายชั่วโมง 
      งานต่างๆที่เข้ากับไลฟ์สไตล์ของตัวคุณ      
    </c-text>
  </c-box>
  <c-box :p="5" shadow="md" border-width="1px">
    <c-heading color="#472760">Hiring jobs</c-heading>
    <c-text :mt="4">
      หากคุณต้องการรับสมัครคนทำงาน ต้องการหาคนช่วยงาน 
      หรือแม้แต่งานจ้างเล็กน้อย คุณก็สามารถตามหาคนได้ที่นี่ ได้ทุกเมื่อ ทุกเวลาตามที่คุณต้องการ    
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
      image: { backgroundImage: "url(https://raw.githubusercontent.com/jobserm/jobserm.github.io/2069614f67bff4d8eade11d087cc4504cb388e33/src/components/about-page/GroupBackground.svg)" }
    };
  }
};
</script>

<style>
</style>