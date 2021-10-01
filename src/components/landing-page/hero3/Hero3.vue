<template>
  <c-box pb="16">
    <c-stack pb="4">
      <c-heading>ตัวอย่างงานที่ผ่านมา</c-heading>
      <c-heading opacity="0.6" size="sm" fontWeight="sm"
        >งานยอดนิยมที่พาร์ทเนอร์ของเราพอใจมากที่สุด</c-heading
      >
    </c-stack>
    <c-simple-grid :columns="[1, 2, 2, 4]" spacing="16">
      <hero-3-item
        :icon="require('./1.svg')"
        :heading="`หาเพื่อนกินข้าว`"
        :description="
          `แบ่งประเภทและหมวดหมู่งานที่คุณกำลังมองหา ตั้งแต่งานทั่วไป จนถึงการพาสุนัขตัวโปรดของคุณไปเดินเล่น`
        "
      />
      <hero-3-item
        :icon="require('./2.svg')"
        :heading="`ทำความสะอาดบ้าน`"
        :description="
          `สามารถสร้างโปรไฟล์ของตัวเองเพื่อหางานได้ หรือสามารถประกาศจ้างงานตามที่ต้องการได้`
        "
      />
      <hero-3-item
        :icon="require('./3.svg')"
        :heading="`คนแพ็คของออนไลน์`"
        :description="`ทั้งสัญญารายเดือน และสัญญารายวัน`"
      />

      <hero-3-item
        :icon="require('./4.svg')"
        :heading="`พาน้องแมว\nไปเดินเล่น`"
        :description="`เลือกทำเฉพาะเวลาที่อยากทำ หรือตกลงกับเจ้าของงานได้เล้ย`"
      />
      <hero-3-item
        :icon="require('./5.svg')"
        :heading="`ย้ายบ้าน`"
        :description="`เลือกทำเฉพาะเวลาที่อยากทำ หรือตกลงกับเจ้าของงานได้เล้ย`"
      />
      <hero-3-item
        :icon="require('./6.svg')"
        :heading="`ต่อเติมบ้าน`"
        :description="`เลือกทำเฉพาะเวลาที่อยากทำ หรือตกลงกับเจ้าของงานได้เล้ย`"
      />
      <hero-3-item
        :icon="require('./7.svg')"
        :heading="`คนรีดผ้า`"
        :description="`เลือกทำเฉพาะเวลาที่อยากทำ หรือตกลงกับเจ้าของงานได้เล้ย`"
      />
      <hero-3-item
        :icon="require('./8.svg')"
        :heading="`ขับรถรับ-ส่ง`"
        :description="`เลือกทำเฉพาะเวลาที่อยากทำ หรือตกลงกับเจ้าของงานได้เล้ย`"
      />
    </c-simple-grid>
  </c-box>
</template>

<script>
import hero3Item from "./hero3-item.vue";
export default {
  components: { hero3Item },
  name: "Hero3",
};
</script>

<style></style>
