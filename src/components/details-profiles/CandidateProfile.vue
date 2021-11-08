<template>
    <c-box  
        direction="column"
        minW="100%"
        :py="[null, '12']"
        :bgImage="require('./bg_profile.svg')"
        background-repeat="repeat-x"
    >
        <c-box  px="20" py="10" >
        <loading v-if="isLoading" />
        <div v-if="!isLoading">
            <c-stack>
                <c-heading align="center" fontSize="5xl" py="5">ประวัติส่วนตัว</c-heading>
            </c-stack>
            

            <c-flex py="16" justify="center">
                <info-profile
                    v-bind:freelancerName="this.user.name + this.user.lastname"
                    v-bind:rating="user.review"
                    v-bind:age="user.birthdate"
                    :star="require(`./star.png`)"
                />
                <c-box bg="#FDFDFD" border-width="3px" rounded="0.5rem">
                    <c-heading
                        as="h2"
                        size="xl"
                        color="black"
                        opacity="0.9"
                        px="24"
                        lineHeight="3"
                    >
                    ประวัติส่วนตัว
                    </c-heading>

                    <c-text 
                        as="h1"
                        fontSize="2xl"
                        color="black"
                        opacity="0.9"
                        px="24"
                        lineHeight="2.5"
                    >
                    ชื่อ : {{ this.user.name }}
                    </c-text>

                    <c-text 
                        as="h1"
                        fontSize="2xl"
                        color="black"
                        opacity="0.9"
                        px="24"
                        lineHeight="2.5"
                    >
                นามสกุล : {{ this.user.lastname }}
                    </c-text>

                    <c-text 
                        as="h1"
                        fontSize="2xl"
                        color="black"
                        opacity="0.9"
                        px="24"
                        lineHeight="2.5"
                    >
                    เบอร์โทรศัพท์ : {{ this.user.phone }}
                    </c-text>

                    
                    <c-text 
                        as="h1"
                        fontSize="2xl"
                        color="black"
                        opacity="0.9"
                        px="24"
                        lineHeight="2.5"
                    >
                    อีเมล : {{ this.user.email }}
                    </c-text>

                    
                    <c-text 
                        as="h1"
                        fontSize="2xl"
                        color="black"
                        opacity="0.9"
                        px="24"
                        lineHeight="2.5"
                    >
                    ที่อยู่ : {{ this.user.address }}
                    </c-text>

                    <c-heading
                        as="h2"
                        size="xl"
                        color="black"
                        opacity="0.9"
                        px="24"
                        lineHeight="3"
                        mt="1rem"
                    >
                    ช่องทางการติดต่อ
                    </c-heading>

                    <c-text 
                        as="h1"
                        fontSize="2xl"
                        color="black"
                        opacity="0.9"
                        px="24"
                        lineHeight="2.5"
                    >
                    facebook : {{ this.user.facebook }}
                    </c-text>

                    <c-text 
                        as="h1"
                        fontSize="2xl"
                        color="black"
                        opacity="0.9"
                        px="24"
                        lineHeight="2.5"
                    >
                    line : {{ this.user.line }}
                    </c-text>

                    <c-heading
                        as="h2"
                        size="xl"
                        color="black"
                        opacity="0.9"
                        px="24"
                        lineHeight="3"
                        mt="1rem"
                    >
                    ข้อมูลเพิ่มเติม
                    </c-heading>

                    <c-text 
                        as="h1"
                        fontSize="2xl"
                        color="black"
                        opacity="0.9"
                        px="24"
                        lineHeight="2.5"
                    >
                    เกี่ยวกับตนเอง : {{ this.user.about_me }}
                    </c-text>

                    <c-text 
                        as="h1"
                        fontSize="2xl"
                        color="black"
                        opacity="0.9"
                        px="24"
                        lineHeight="2.5"
                    >
                    ความสามารถ : {{ this.user.skill }}
                    </c-text>

                    
                    <c-heading
                        as="h2"
                        size="xl"
                        color="black"
                        opacity="0.9"
                        px="24"
                        lineHeight="3"
                        mt="1rem"
                    >
                    สิ่งที่อยากบอก
                    </c-heading>

                    <c-text 
                        as="h1"
                        fontSize="2xl"
                        color="black"
                        opacity="0.9"
                        px="24"
                        lineHeight="2.5"
                    >
                    ข้อความเพิ่มเติมจากผู้สมัคร : {{ this.user.info[0].pivot.remark }}
                    </c-text>

                    <c-button
                        mx="24" 
                        :_hover="{ bg: '#E2E8F0'}"
                        bgColor="brand.500"
                        p="6"
                        mt="12"
                        ml="85%"
                        color="white"
                        fontSize="2xl"
                        @click="submit">จ้างงาน</c-button>
                </c-box>
            </c-flex>
        </div>
        <!-- รีวิว -->
        <c-heading size="2xl" py="5" mt="5%" ml="4%" v-if="this.user.review !== 0">รีวิวจากผู้ว่าจ้าง</c-heading>
        <c-simple-grid :columns="[1, 1, 1, 2]" spacing="10" ml="3%">
                    <div v-for="review in this.reviews" :key="review.id">
                        <c-stack
                            wrap="wrap"
                            rounded="0.5rem"
                            p="12"
                            bgColor="#FDFDFD"
                            shadow="xl" 
                            border-width="1px"
                            w="70rem"
                            h="12rem"
                            mt="2rem"
                            >
                            
                            <c-heading fontSize="2xl" pb="2">{{ review.comment }} 
                                <br>
                                <br>
                                คะแนนรีวิว {{ review.rating.toFixed(1) }} 
                            </c-heading>
        
                        </c-stack>
                    </div>
                </c-simple-grid>
        </c-box>
    </c-box>   
</template>

<script>
import JobApi from '../../store/JobApi'
import UserStore from '../../store/UserStore'
import InfoProfile from './InfoProfile.vue'
import ReviewApi from '../../store/ReviewApi'

export default {
    components: {
        InfoProfile,
    },
    data() {
        return {
            user: {},
            reviews: [],
            isLoading: true,
            job_id: this.$route.params.job_id,
            user_id: this.$route.params.user_id
        }
    },

    async created() {
        //console.log(this.job_id)
        this.fetchData(this.user_id)

    },

    methods: {
        async editFormat() {
            if (this.user.birthdate) {
                let ageDifMs = Date.now() - new Date(this.user.birthdate).getTime()
                let ageDate = new Date(ageDifMs)
                this.user.birthdate = Math.abs(ageDate.getUTCFullYear() - 1970)
            }
            if (this.user.review === null) {
                this.user.review = 0
            } else {
                this.user.review = this.user.review.toFixed(1)
            }
        },

        async fetchData(id) {
            await UserStore.dispatch("fetchUserByID", id)
            let res = UserStore.getters.fetchUser
            this.user = res

            console.log(this.user)

            await ReviewApi.dispatch("getReviewByUserID", this.user.id)
            let res2 = ReviewApi.getters.getReviewsByUserID
            this.reviews = res2

            this.isLoading = false
            this.editFormat()
        },

        async submit() {
          this.$swal({
                title: "ยืนยันการจ้างงาน",
                text: "",
                icon: "warning",
                buttons: true,
                dangerMode: true,              
          }).then((selectFreelance) => {
            if (selectFreelance) {
                let res = this.selectFreelance()
                if(res.success) {
                    this.$router.push("/userJob")
                    this.$swal("จ้างงานเสร็จสิ้น", {icon: "success"})
                } else {
                    console.log("ไม่นะะะ")
                }
            }
          });
         
          
        },

        async selectFreelance() {
            let body1 = {
            job_id : this.job_id,
            user_id : this.user_id
          }
          let res = await JobApi.dispatch("employerSelectFreelancer", body1)
          return res
        }
    },
}
</script>

<style>
 
</style>