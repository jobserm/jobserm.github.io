<template>
  <c-flex
    align="center"
    justify="center"
  >
  <c-flex bg="#D6B1FF" size="470px" align="center" justify="center">
    <c-image
      :src="require('../../../assets/loginPicture.svg')"
      :size="550"
      rounded="1rem"
    />
  </c-flex>
  <c-flex bg="#D6B1FF" size="470px" align="center" justify="center">
    <c-stack
      spacing="4"
      :align="['center', 'center', 'flex-start', 'flex-start']"
    >
      <c-heading as="h1" size="xl" fontWeight="bold" color="primary.800">
        Job' Serm
      </c-heading>
      <c-heading
        as="h2"
        size="md"
        color="primary.800"
        opacity="0.8"
        fontWeight="normal"
        lineHeight="1.5"
        white-space="pre-line"
      >
        {{ "สมัครสมาชิก" }}
      </c-heading>

      <c-input
          pr="4.5rem"
          placeholder="อีเมล"
          v-model="email"
      />

      <c-input
          pr="4.5rem"
          placeholder="ชื่อ-สกุล"
          v-model="nameSurname"
      />

      <c-input
          pr="4.5rem"
          placeholder="เบอร์โทรศัพท์"
          v-model="callNumb"
      />

      <c-input-group size="md">
        <c-input
          pr="4.5rem"
         :type="show ? 'text' : 'password'"
          placeholder="รหัสผ่าน"
          v-model="password"
        />
       <c-input-right-element width="4.5rem">
            <c-button h="1.75rem" size="sm" @click="show = !show">
              <c-image src="/eye.svg" w="30px" />
           <!-- {{ show ? 'Hide' : 'Show' }} -->
           </c-button>
       </c-input-right-element>
       </c-input-group>

       <c-input-group size="md">
        <c-input
          pr="4.5rem"
         :type="show ? 'text' : 'password'"
          placeholder="ยืนยันรหัสผ่าน"
          v-model="passwordAgain"
        />
       <c-input-right-element width="4.5rem">
            <c-button h="1.75rem" size="sm" @click="show = !show">
              <c-image src="/eye.svg" w="30px" />
           <!-- {{ show ? 'Hide' : 'Show' }} -->
           </c-button>
       </c-input-right-element>
       </c-input-group>

      <c-flex wrap="wrap">
        <c-button width="200px" variant-color="pink" variant="solid" mr="10">
          สมัครสมาชิก
        </c-button>
      </c-flex>
      
    </c-stack>
  </c-flex>
  </c-flex>
</template>

<script>
export default {
  components: { },
  name: "Register1",
  name2: 'PasswordInput',
  data () {
    return {
      password: '',
      show: false
    }
  }
}
</script>

<style></style>
