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

    {{ users }}
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
                remark: ''
            },
            // users:[
            //     {
            //         "id": 1,
            //         "name": "Michael",
            //         "lastname": "Raynor",
            //         "birthdate": "2012-08-22",
            //         "gender": "aut",
            //         "role": "USER",
            //         "phone": "(442) 259-3006",
            //         "address": "50491 Prosacco Skyway Apt. 211\nEast Luciohaven, MD 70046-2014",
            //         "facebook": "toey",
            //         "line": null,
            //         "email": "cole.guillermo@example.com",
            //         "email_verified_at": "2021-10-17T18:58:04.000000Z",
            //         "username": "qkuhlman",
            //         "about_me": "Deserunt alias officiis corrupti voluptatibus animi sequi. Et maiores dolores vel. Enim qui voluptas vel.",
            //         "skill": "Ut dolores ut id nostrum.",
            //         "activation": 1,
            //         "is_publish": 0,
            //         "created_at": "2021-10-17T18:58:04.000000Z",
            //         "updated_at": "2021-10-17T18:58:04.000000Z",
            //         "deleted_at": null
            //     },
            // ]
        }
    },
    async mounted() {
        this.user = await AuthUser.getters.user;
    },
    methods: {
        // saveInfo () {
        //     this.$emit('saveInfo', this.form)
        //     console.log("this.remark", this.user.id)
        //     // this.$router.push("/");
        // }
        async saveInfo() {
            let payload = {
                id: this.user.id,
                remark: this.form.remark
            }
            console.log("payload.id---", payload.id)
            console.log("payload.remark---", payload.remark)
            await JobApi.dispatch("addRemark", payload)
        }

    }
}
</script>

<style>

</style>