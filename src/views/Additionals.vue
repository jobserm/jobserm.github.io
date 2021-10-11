<template>
  <c-stack align="center" justify="center" p="2rem"> 
    <additionals-info align="center" 
        :heading="`กรุณากรอกข้อมูลเพิ่มเติม`"
        :description="
          `Fill the data for profile. It will take a couple of minutes.`
        "
      />
      <additionals-info/>

      <c-text size="md" fontWeight="bold" color="primary.800" p="3rem" mr="31rem" >
        ช่องทางการติดต่อ
      </c-text>

      <c-input-group>
          <c-input-left-element><c-icon name="phone" color="gray.300" /></c-input-left-element>
          <c-input variant="flushed"  type="phone" placeholder="หมายเลขโทรศัพท์" isReadOnly="true" w="40rem"/>
          <!-- <c-textarea is-disabled placeholder="Here is a sample placeholder" /> -->  <!-- อาจจะใช้ textarea แต่ไม่มั่นใจ -->
      </c-input-group>

      <c-input-group>
          <c-input-left-element><c-icon name="email" color="gray.300" /></c-input-left-element>
          <c-input variant="flushed"  type="email" placeholder="อีเมล" isReadOnly="true" w="40rem"/>
      </c-input-group>

      <c-input-group>
          <c-input-left-element><c-icon name="chevron-right" color="gray.300" /></c-input-left-element>
          <c-input variant="flushed"  type="text" placeholder="Facebook" isReadOnly="true" w="40rem"/>
      </c-input-group>

      <c-form-control>
        <c-form-label for="email" p="1rem">แนะนำตัวเอง</c-form-label>
        <c-input type="text" id="text" w="40rem" h="8rem" />
        <!-- <c-textarea placeholder="แนะนำตัวเอง" type="text" id="text" w="40rem" h="8rem" /> -->
      </c-form-control>

      <!-- <c-input-group>
          <c-input-left-element><c-icon name="info" color="gray.300" /></c-input-left-element>
          <c-input type="text" placeholder="แนะนำตัวเอง" focus-border-color="pink.400" w="40rem" h="8rem"/>

      </c-input-group> -->

      <c-button backgroundColor="brand.500" color="white" variant="solid" justify="center" size="lg">
          ส่งข้อมูล
      </c-button>
  </c-stack>
</template>

<script>
import AdditionalsInfo from '../components/additionals-page/AdditionalsInfo.vue';

export default {
  name: "Additionals",
  components: {
    AdditionalsInfo,
  },


};
</script>
