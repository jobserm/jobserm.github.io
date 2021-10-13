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
        {{ "เข้าสู่ระบบ" }}
      </c-heading>

      <c-input
          pr="4.5rem"
          placeholder="อีเมล"
          v-model="email"
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

      <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password" >ลืมรหัสผ่าน ?</router-link>
      </p>

      <c-flex wrap="wrap">
        <c-button width="250px" variant-color="pink" variant="solid" mr="10">
          เข้าสู่ระบบ
        </c-button>
      </c-flex>

      <p class="notHaveAnAccount" >
        <c-text fontSize="xs" color="primary.800" opacity="0.6">
          คุณยังไม่มีบัญชี? 
          <router-link class="shadowLink" to="/register" >
            <a>สมัครสมาชิก</a>
          </router-link>
        </c-text>
      </p>
      
    </c-stack>
  </c-flex>
  </c-flex>
</template>

<script>
export default {
  components: { },
  name: "Login1",
  name2: 'PasswordInput',
  data () {
    return {
      password: '',
      show: false
    }
  }
}
</script>

<style>
  .notHaveAnAccount{
    display: inline;
  }
  .shadowLink {
    color: #881fff;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.4);
  }
</style>
