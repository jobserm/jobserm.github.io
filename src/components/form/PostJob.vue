<template>
  <div>
    <c-text fontSize="4xl" textAlign="center">{{ "ลงประกาศงานใหม่" }}</c-text>
    <c-text fontsize="md" color="gray.400">{{
      `Fill in the data to post new job`
    }}</c-text>
    <c-box
      w="55rem"
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
            <c-text fontSize="2xl">{{ "รายละเอียดงาน" }}</c-text>
            <c-text fontSize="md" color="gray.400">{{
              "More information about job"
            }}</c-text>
          </c-box>
          <c-box>
            <c-form-label for="title" color="gray.600">{{
              "ชื่องาน"
            }}</c-form-label>
            <c-input id="title" placeholder="งาน" v-model="form.title"/>
          </c-box>

          <!-- <loading v-if="loading" /> -->
          <c-box>
            <c-form-label for="title" color="gray.600">{{
              "เพิ่มรูปงาน"
            }}</c-form-label>
            <c-input 
                mb="1rem"
                type="file"
                multiple
                @change="handleFilesUpload( $event )"
            />
            <c-button bgColor="brand.400" color="brand.500" width="70px" @click="uploadFiles">เพิ่มรูป</c-button>
          </c-box>

          <c-box>
            <c-form-label for="description" color="gray.600">{{
              "รายละเอียด"
            }}</c-form-label>
            <c-textarea id="description" placeholder="รายละเอียดงาน" v-model="form.description"/>
          </c-box>
          <c-box>
            <c-form-label for="requirement" color="gray.600">{{
              "คุณสมบัติผู้สมัคร"
            }}</c-form-label>
            <c-textarea id="requirement" placeholder="คุณสมบัติผู้สมัคร" v-model="form.requirement"/>
          </c-box>
          <c-box>
            <c-form-label for="type" color="gray.600">{{
              "เลือกประเภทงาน"
            }}</c-form-label>

            <c-select id="type" v-model="form.category">
              <option value="" style="display:none;" >ประเภทงาน</option>
              <option v-for="index in categories" :key="index.id">{{ index.category_name }}</option>
                
            </c-select>

          </c-box>
          <c-box>
            <c-form-label for="province" color="gray.600">{{
              "จังหวัด"
            }}</c-form-label>
              <c-select id="province" v-model="form.province">
                <option value="" style="display:none;" >จังหวัด</option>
                <option v-for="index in provinces.data" :key="index.id">{{ index.province }}</option>
                
              </c-select>
          </c-box>
          <c-box pb="3vh">
            <c-form-label for="compensation" color="gray.600">{{
              "ค่าตอบแทน"
            }}</c-form-label>
            <c-input id="compensation" placeholder="ค่าตอบแทน" v-model="form.compensation"/>
          </c-box>
        </c-stack>
    </c-box>
    <c-box textAlign="right">
      <c-button 
      variant-color="blue"
      mt="1.5rem"
      @click="post">ลงประกาศ</c-button>
    </c-box>
  </div>
</template>
<script>
import CategoryStore from "../../store/CategoryStore";
import Axios from "axios";
// import axios from "axios"
// import Loading from '../../components/miscellaneous/Loading.vue'
export default {
  // components: { Loading },
    data() {
        return {
            form: {
                title: "",
                description: "",
                requirement: "",
                category: "",
                province: "",
                compensation: ""
            }, 
            categories: [],
            provinces: [],
            // file: []
        }
    },
    created() {
        this.getCategories()
        this.getProvince()
    },
    methods: {
      post () {
        // this.$emit will invoke parent method (postJob) 
        // and pass this.form back to parent
        this.$emit('postJob', this.form)
      },

      async getCategories() {
        //console.log("eiei")
        await CategoryStore.dispatch('fetchData')
        this.categories = CategoryStore.getters.getCategories
      },
      async getProvince() {
        let res = await Axios.get(`https://thaiaddressapi-thaikub.herokuapp.com/v1/thailand/provinces`);
        this.provinces = res.data;
      },
      handleFilesUpload(event) {
            this.files = [...event.target.files]
        },
         async uploadFiles() {
      //       try {
      //           let formData = new FormData()
      //           this.files.forEach(async (file) => {
      //               formData.append('photo', file)
      //               let res = await axios.post('http://localhost:8000/api/images', formData, {
      //                   headers: {
      //                       'X-JOB-ID': 1
      //                   }
      //               })
      //               console.log(res)
      //               if (res.status === 200) {
      //                   console.log('upload success!')
      //               }
      //           })
                
      //       } catch (e) {
      //           console.log(e)
      //       }
         }
    }
};
</script>

<style>
</style>