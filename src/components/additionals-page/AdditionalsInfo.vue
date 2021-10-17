<template>
 <div>
     <!-- //jolie.morar@example.org -->
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
        <c-textarea placeholder="แนะนำเกี่ยวกับตนเอง" focus-border-color="pink.400" v-model="form.about_me"/>
    </c-box>
    </c-box>

    <c-box textAlign="right">
        <c-button backgroundColor="brand.500" width="250px"  variant="solid" mt="1.5rem" @click="saveInfo">
            ส่งข้อมูล
        </c-button>
    </c-box> 
  </div>
    
</template>

<script>
import AuthUser from "@/store/AuthUser"
export default {
    data() {
        return {
            user: {},
            form: {
                about_me: ''
            },
        }
    },
    async mounted() {
        this.user = await AuthUser.getters.user;
    },
    methods: {
        saveInfo () {
            this.$emit('saveInfo', this.form)
            console.log(this.user);
            this.$router.push("/");
        },
    }
}
</script>

<style>

</style>