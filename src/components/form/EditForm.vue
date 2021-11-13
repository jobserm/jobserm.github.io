<template>
  <div>
    <loading v-if="isLoading" />
    <c-text fontSize="4xl" textAlign="center">แก้ไขข้อมูลส่วนตัว</c-text>
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
            
            <div>
              
            </div>
          </c-box>

          
          <c-box>
            <c-form-label for="name" color="gray.600">{{
              "username"
            }}</c-form-label>
            <c-input placeholder="username" v-model="form.username"/>
          </c-box>
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
          <c-box>
            <c-form-label for="name" color="gray.600">{{
              "ชื่อจริง"
            }}</c-form-label>
            <c-input placeholder="ชื่อจริง" v-model="form.firstname"/>
          </c-box>
          <c-box>
            <c-form-label for="lastname" color="gray.600">{{
              "นามสกุล"
            }}</c-form-label>
            <c-input placeholder="นามสกุล" v-model="form.lastname"/>
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
            <textarea v-model="form.address" placeholder="ที่อยู่" rows="4" cols="82" ></textarea>
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
            <c-input placeholder="email" v-model="form.email"/>
          </c-box>
          <c-box>
            <c-form-label for="เบอร์โทรศัพท์" color="gray.600">{{
              "เบอร์โทรศัพท์"
            }}</c-form-label>
            <c-input placeholder="เบอร์โทรศัพท์" v-model="form.phone"/>
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
          
            <c-form-label for="about_me" color="gray.600">{{
              "เกี่ยวกับตนเอง"
            }}</c-form-label>
            <textarea v-model="form.about_me" placeholder="แนะนำเกี่ยวกับตนเอง" rows="4" cols="82" ></textarea>
          
          
            <c-form-label for="skills" color="gray.600">{{
              "ทักษะและความสามารถ"
            }}</c-form-label>
            <textarea v-model="form.skill" placeholder="ทักษะและความสามารถ" rows="4" cols="82" ></textarea>

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
import UserApi from "@/store/UserStore.js"
import Axios from "axios";

export default {
  data() {
    return {
      form: {
        firstname:"",
        lastname:"",
        username:"",
        email:"",
        phone:"",
        password:"",
        password_confirmation:"",
        birthdate: "",
        address: "",
        facebook: "",
        line: "",
        about_me: "",
        skill: "",
        is_publish: 0,
        id:this.$route.params.id
        // gender: "",
      },
      files: [],
      show:false,
      isLoading: true,
      user:[],
    }
  },
  async created(){
    console.log(this.$route.params.id)
    await UserApi.dispatch("fetchUserByID",this.$route.params.id)
    this.user = UserApi.getters.fetchUser
    console.log(this.user)
    this.form.username = this.user.username
    this.form.firstname = this.user.name
    this.form.lastname = this.user.lastname
    this.form.phone = this.user.phone
    this.form.line = this.user.line
    this.form.facebook = this.user.facebook
    this.form.email = this.user.email
    this.form.about_me = this.user.about_me
    this.form.skill = this.user.skill
    this.form.address = this.user.address
    this.form.birthdate = this.user.birthdate

    this.isLoading = false
    
    
  },
  methods: {
    async saveInfo () {
      console.log(this.form)
      if(this.form.username == "" || this.form.firstname == "" || this.form.lastname == "" || this.form.email == "" || this.form.phone == "" || this.form.password == "" || this.form.password_confirmation == "" || this.form.birthdate == "" || this.form.address == "" || this.form.facebook == "" || this.form.line == "" || this.form.about_me == "" || this.form.skill == "")
      {
        this.$swal("กรุณากรอกข้อมูลให้ครบทุกช่อง","","error")
      }
      else if(this.form.password != this.form.password_confirmation)
      {
        this.$swal("password ไม่ตรงกัน","","error")
      }
      else{
        await UserApi.dispatch("fetchEditUser",this.form)

        this.$swal("update ข้อมูลเสร็จสิ้น","","success")
        this.$router.push("/auth-profile")
      }
    },

    async uploadFiles() {
      // try {
      //     let formData = new FormData()
      //     this.files.forEach(async (file) => {
      //         formData.append('photo', file)
      //         let res = await axios.post('http://localhost:8000/api/images', formData, {
      //             headers: {
      //                 'X-JOB-ID': 1
      //             }
      //         })
      //         console.log(res)
      //         if (res.status === 200) {
      //             console.log('upload success!')
      //         }
      //     })
          
      // } catch (e) {
      //     console.log(e)
      // }
    }
  }
};
</script>

<style>
textarea{
  border: 1px solid 	#E8E8E8;
  border-radius: 7px;
}
textarea:focus { 
    outline: none !important;
    border-color: #719ECE;
    box-shadow: 0 0 10px #719ECE;
}
</style>