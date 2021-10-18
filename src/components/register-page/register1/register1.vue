<template>
  <c-flex
    align="center"
    justify="center"
  >
  <c-flex bg="#D6B1FF" size="560px" align="center" justify="center">
    <c-image
      :src="require('../../../assets/loginPicture.svg')"
      :size="600"
      rounded="1rem"
    />
  </c-flex>
  <c-flex bg="#D6B1FF" size="560px" align="center" justify="center">
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
          v-model="form.email"
      />

      <c-input
          pr="4.5rem"
          placeholder="ชื่อผู้ใช้"
          v-model="form.username"
      />

      <c-input
          pr="4.5rem"
          placeholder="ชื่อ"
          v-model="form.name"
      />

      <c-input
          pr="4.5rem"
          placeholder="สกุล"
          v-model="form.lastname" 
      />

      <c-input
          pr="4.5rem"
          placeholder="เบอร์โทรศัพท์"
          v-model="form.phone"
      />

      <c-input-group size="md">
        <c-input
          pr="4.5rem"
         :type="show ? 'text' : 'password'"
          placeholder="รหัสผ่าน"
          v-model="form.password"
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
          v-model="form.password_confirmation"
        />
       <c-input-right-element width="4.5rem">
            <c-button h="1.75rem" size="sm" @click="show = !show">
              <c-image src="/eye.svg" w="30px" />
           <!-- {{ show ? 'Hide' : 'Show' }} -->
           </c-button>
       </c-input-right-element>
       </c-input-group>

      <c-flex wrap="wrap">
        <c-button @click="register" width="200px" variant-color="pink" variant="solid" mr="10">
          สมัครสมาชิก
        </c-button>
      </c-flex>
      
    </c-stack>
  </c-flex>
  </c-flex>
</template>

<script>
import AuthUser from '@/store/AuthUser'
export default {
  components: { },
  name: "Register1",
  name2: 'PasswordInput',
  data () {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        lastname: '',
        phone: '',
        username: '',
        password_confirmation: '',
      },
      show: false
    }
  },
  methods: {
        // clearForm() {
        //     this.form = {
        //         email: '',
        //         nameSurname: '',
        //         callNumb: '',
        //         password: '',
        //         passwordAgain: '',
        //         show: false
        //     }
        // },
        async register(){
          console.log(this.form)
          if (this.form.name !== "" && this.form.email !== "" && this.form.password !== "" && this.form.lastname !== "" && this.form.phone !== "" && this.form.username !== "" && this.form.email !== "") {
            if(this.form.password === this.form.password_confirmation){
                let res = await AuthUser.dispatch('register', this.form)
                if(res.success){
                    this.$swal("ลงทะเบียนสำเร็จ", `ยินดีต้อนรับคุณ ${res.user.name}`, "success")
                    this.$router.push("/newuser")
                } 
                else {
                    this.$swal("ลงทะเบียนไม่สำเร็จ", res.message, "error")
                }
            }
            else{
                this.$swal('รหัสผ่านไม่ตรงกัน', '', "error")
            }
          } else {
            this.$swal("ลงทะเบียนไม่สำเร็จ", `โปรดกรอกข้อมูลให้ครบถ้วน`, "error");
          }
            
        }
    }
}
</script>

<style></style>
