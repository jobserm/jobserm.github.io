<template>
  <c-box pb="16">
    <c-heading pb="8">เว็บเรามีอะไร ไม่รู้ววว....</c-heading>
    <c-simple-grid :columns="[1, 1, 1, 2]" spacing="16">
      <hero-2-item
        :icon="require('./1.svg')"
        :heading="`หางานง่าย`"
        :description="
          `แบ่งประเภทและหมวดหมู่งานที่คุณกำลังมองหา ตั้งแต่งานทั่วไป จนถึงการพาสุนัขตัวโปรดของคุณไปเดินเล่น`
        "
      />
      <hero-2-item
        :icon="require('./2.svg')"
        :heading="`มีพื้นที่ให้ทั้งผู้หางานและผู้จ้างงาน`"
        :description="
          `สามารถสร้างโปรไฟล์ของตัวเองเพื่อหางานได้ หรือสามารถประกาศจ้างงานตามที่ต้องการได้`
        "
      />
      <hero-2-item
        :icon="require('./3.svg')"
        :heading="`หาคนง่าย ได้พนักงานเร็ว`"
        :description="`ทั้งสัญญารายเดือน และสัญญารายวัน`"
      />

      <hero-2-item
        :icon="require('./4.svg')"
        :heading="`ทำตอนไหนก็ได้`"
        :description="`เลือกทำเฉพาะเวลาที่อยากทำ หรือตกลงกับเจ้าของงานได้เล้ย`"
      />
    </c-simple-grid>
    <!-- <c-grid
      h="30vh"
      w="100%"
      template-rows="repeat(2, 1fr)"
      template-columns="repeat(2, 1fr)"
      gap="6"
    >
      <hero-2-item
        :icon="require('./1.svg')"
        :heading="`หางานง่าย`"
        :description="
          `แบ่งประเภทและหมวดหมู่งานที่คุณกำลังมองหา ตั้งแต่งานทั่วไป จนถึงการพาสุนัขตัวโปรดของคุณไปเดินเล่น`
        "
      />
      <hero-2-item
        :icon="require('./2.svg')"
        :heading="`มีพื้นที่ให้ทั้งผู้หางานและผู้จ้างงาน`"
        :description="
          `สามารถสร้างโปรไฟล์ของตัวเองเพื่อหางานได้ หรือสามารถประกาศจ้างงานตามที่ต้องการได้`
        "
      />
      <hero-2-item
        :icon="require('./3.svg')"
        :heading="`หาคนง่าย ได้พนักงานเร็ว`"
        :description="`ทั้งสัญญารายเดือน และสัญญารายวัน`"
      />

      <hero-2-item
        :icon="require('./4.svg')"
        :heading="`ทำตอนไหนก็ได้`"
        :description="`เลือกทำเฉพาะเวลาที่อยากทำ หรือตกลงกับเจ้าของงานได้เล้ย`"
      />
    </c-grid> -->
  </c-box>
</template>

<script>
import hero2Item from "./hero2-item.vue";
export default {
  components: { hero2Item },
  name: "Hero2",
};
</script>

<style></style>
