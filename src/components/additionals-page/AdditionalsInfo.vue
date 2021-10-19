<template>
 <div>
    <c-text fontSize="4xl" textAlign="center">{{ "กรุณากรอกข้อมูลเพิ่มเติม" }}</c-text>
    <c-text fontsize="md" color="gray.400" textAlign="center">{{
      `Fill the data for profile. It will take a couple of minutes.`
    }}</c-text>
   <c-box
      mt="5vh" 
      border="solid"
      borderColor="gray.100"
      borderWidth="0.1rem"
      borderRadius="0.5rem"
      p="2rem"
    >
        <c-stack :spacing="6">
            <c-box>
                <c-text fontSize="2xl">
                    {{ "ช่องทางการติดต่อ" }}

                </c-text>
                <c-text fontSize="md" color="gray.400">
                    {{"These contracts are used to inform about job"}}
                </c-text>
            </c-box>
            
            <c-box>
                <c-form-label for="email" color="gray.600" c-icon name="email">
                    {{"อีเมล"}}
                </c-form-label>
                <c-input id="email" disabled v-model="user.email"/> 
            </c-box>

            <c-box>
                <c-form-label for="phone" color="gray.600" c-icon name="phone">
                    {{"เบอร์โทรศัพท์"}}
                </c-form-label>
                <c-input id="phone" disabled v-model="user.phone"/>
            </c-box>

            <c-box>
                <c-form-label for="facebook" color="gray.600">
                    {{"Facebook"}}
                </c-form-label>
                    <c-input id="facebook" disabled v-model="user.facebook"/> 
            </c-box>
        </c-stack>
    </c-box>

    <c-box
      mt="5vh"
      border="solid"
      borderColor="gray.100"
      borderWidth="0.1rem"
      borderRadius="0.5rem"
      p="2rem"
    >
        <c-box>
            <c-text fontSize="2xl">
                {{ "แนะนำตนเอง" }}
            </c-text>
            <c-text fontSize="md" color="gray.400">
                {{"Express yourself!"}}
            </c-text>
        </c-box>

        <c-box>
            <c-textarea placeholder="แนะนำเกี่ยวกับตนเอง" focus-border-color="pink.400" v-model="form.remark"/>
        </c-box>

        <c-box textAlign="right">
            <c-button  width="250px" variant-color="blue"  mt="1.5rem" @click="saveInfo">
                ส่งข้อมูล
            </c-button>
        </c-box> 
    </c-box>
  </div>
    
</template>

<script>
import AuthUser from "@/store/AuthUser"
import JobApi from '@/store/JobApi'
export default {
    data() {
        return {
            user: {},
            form: {
                remark: '',
                jobId: [],
            },
        }
    },
    async mounted() {
        this.user = await AuthUser.getters.user;
    },
    async created() {
        this.jobId = JSON.parse(localStorage.getItem('YourItem'));
        console.log(this.jobId)
    },
    methods: {
        async saveInfo() {
            let payload = {
                user_id: this.user.id,
                remark: this.form.remark,
                job_id: this.jobId.id
            }
            if(this.form.remark === ''){
                this.$swal("กรุณาใส่คำแนะนำตัวเอง",'',"error")
            }
            else{
                try{
                    await JobApi.dispatch("addRemarks", payload)
                    this.$swal("สมัครเรียบร้อย",'รอการติดต่อจากผู้ว่าจ้าง',"success")
                } catch(error) {
                    this.$swal("สมัครไปแล้ว",'',"error")
                    this.$router.push("/jobinfo")
                }
            }
        }
    }
}
</script>

<style>

</style>