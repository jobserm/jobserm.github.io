<template>
  <div>
    <c-text fontSize="4xl" textAlign="center">{{ title }}</c-text>
    <c-text fontsize="md" color="gray.400">{{
      `Fill in the data for profile. It will take a couple of minutes. You only need a passport`
    }}</c-text>
    <c-box
      mt="5vh"
      border="solid"
      borderColor="gray.100"
      borderWidth="0.1rem"
      borderRadius="0.5rem"
      p="2rem"
    >
        <c-stack :spacing="8">
          <!-- section I -->
          <c-box>
            <c-text fontSize="2xl" py="1rem">{{ "ข้อมูลส่วนตัว" }}</c-text>
            <c-text fontSize="md" color="gray.400">{{
              "Specify exactly as in your passport"
            }}</c-text>
          </c-box>
          <c-box>
            <c-form-label for="name" color="gray.600">{{
              "ชื่อจริง"
            }}</c-form-label>
            <c-input disabled id="name" placeholder="ชื่อจริง" v-model="firstname"/>
          </c-box>
          <c-box>
            <c-form-label for="lastname" color="gray.600">{{
              "นามสกุล"
            }}</c-form-label>
            <c-input disabled id="lastname" placeholder="นามสกุล" v-model="lastname"/>
          </c-box>
          <c-box>
            <c-form-label for="birthdate" color="gray.600">{{
              "วัน/เดือน/ปีเกิด"
            }}</c-form-label>
            <c-input type="date" id="birthdate" placeholder="วัน/เดือน/ปีเกิด" v-model="form.birthdate" />
          </c-box>
          <c-box>
            <c-form-label for="address" color="gray.600">{{
              "ที่อยู่"
            }}</c-form-label>
            <c-textarea placeholder="ที่อยู่" v-model="form.address"/>
          </c-box>
          <c-box pb="3vh">
            <c-form-label for="address" color="gray.600">{{
              "เพศ"
            }}</c-form-label>
            <c-select disabled v-model="form.gender">
              <option value="" style="display:none;">เพศ</option>
              <option value="male">ชาย</option>
              <option value="female">หญิง</option>
              <option value="others">อื่น ๆ</option>
            </c-select>
          </c-box>

          <!-- section II -->
          <c-box>
            <c-text fontSize="2xl">{{ "ช่องทางการติดต่อ" }}</c-text>
            <c-text fontSize="md" color="gray.400">{{
              "These contracts are used to inform about job"
            }}</c-text>
          </c-box>
          <c-box>
            <c-form-label for="email" color="gray.600">{{
              "Email"
            }}</c-form-label>
            <c-input disabled id="email" placeholder="email" v-model="email"/>
          </c-box>
          <c-box>
            <c-form-label for="เบอร์โทรศัพท์" color="gray.600">{{
              "เบอร์โทรศัพท์"
            }}</c-form-label>
            <c-input disabled id="phone" placeholder="เบอร์โทรศัพท์" v-model="phone"/>
          </c-box>
          <c-box>
            <c-form-label for="facebook" color="gray.600">{{
              "Facebook"
            }}</c-form-label>
            <c-input id="facebook" placeholder="Facebook" v-model="form.facebook"/>
          </c-box>
          <c-box>
            <c-form-label for="line" color="gray.600">{{
              "Line ID"
            }}</c-form-label>
            <c-input id="line" placeholder="Line ID" v-model="form.line"/>
          </c-box>

          <!-- section III -->
          <c-box>
            <c-text fontSize="2xl">{{ "แนะนำตนเอง" }}</c-text>
            <c-text fontSize="md" color="gray.400">{{
              "Express yourself!"
            }}</c-text>
          </c-box>
          <c-box>
            <c-form-label for="about_me" color="gray.600">{{
              "เกี่ยวกับตนเอง"
            }}</c-form-label>
            <c-textarea placeholder="แนะนำเกี่ยวกับตนเอง" v-model="form.about_me"/>
          </c-box>
          <c-box>
            <c-form-label for="skills" color="gray.600">{{
              "ทักษะและความสามารถ"
            }}</c-form-label>
            <c-textarea placeholder="ทักษะและความสามารถ" v-model="form.skill"/>
          </c-box>

          <c-box>
            <c-text fontSize="2xl">{{ "การนำข้อมูลไปแสดงในหน้าผู้ที่ต้องการหางาน" }}</c-text>
            <c-text fontSize="md" color="gray.400">{{
              "Permission to perform your information in freelancer page"
            }}</c-text>
          </c-box>
          <c-box pb="3vh">
            <c-checkbox
            @change="(val, $e) => { form.is_publish = $e.target.checked === true ? 1 : 0 }"
            color="gray.600"
            size="md" variant-color="green"
            >อนุญาต</c-checkbox>
          </c-box>
        </c-stack>
    </c-box>
    <c-box textAlign="right">
      <c-button 
      variant-color="blue"
      mt="1.5rem"
      @click="saveInfo">บันทึกข้อมูล</c-button>
    </c-box>
  </div>
</template>

<script>
export default {
  props: {
      title: String,
      user: Object,
      email: String,
      firstname: String,
      lastname: String,
      phone: String,
  },
  data() {
    return {
      form: {
        birthdate: "",
        address: "",
        facebook: "",
        line: "",
        about_me: "",
        skill: "",
        is_publish: 0,
        // gender: "",
      }
    }
  },
  methods: {
    saveInfo () {
      this.$emit('saveInfo', this.form)
    }
  }
};
</script>

<style>
</style>