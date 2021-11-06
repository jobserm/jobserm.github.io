<template>
    <c-box  px="20" py="10">
        <loading v-if="isLoading" />
        <div v-if="!isLoading">
            <c-stack>
                <c-heading size="2xl" py="12">ประวัติส่วนตัว</c-heading>
            </c-stack>
            

            <c-flex py="16" justify="center">
                <info-profile
                    v-bind:freelancerName="this.user.name + this.user.lastname"
                    v-bind:rating="user.review"
                    v-bind:age="user.birthdate"
                    :star="require(`./star.png`)"
                />
                <c-box>
                    <c-heading
                        as="h2"
                        size="lg"
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
                        size="lg"
                        color="black"
                        opacity="0.9"
                        px="24"
                        lineHeight="3"
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
                        size="lg"
                        color="black"
                        opacity="0.9"
                        px="24"
                        lineHeight="3"
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
                </c-box>

                <c-simple-grid :columns="[1, 1, 1, 1]" spacing="10">
                    <c-heading size="xl" pb="2" v-if="this.user.review !== 0">งานที่เคยทำ</c-heading>
                    <div v-for="review in reviews" :key="review.id">
                        <c-stack
                            wrap="wrap"
                            rounded="0.5rem"
                            p="12"
                            bgColor="yellow"
                            shadow="xl" 
                            border-width="1px"
                            w="700px"
                            h="200px"
                            >
                            
                            <c-heading fontSize="2xl" pb="2">{{ review.comment }} <br>
                            คะแนนรีวิว {{ review.rating.toFixed(1) }} </c-heading>
        
                        </c-stack>
                    </div>
                </c-simple-grid>
        

            </c-flex>
        </div>
    </c-box>   
</template>

<script>
import AuthUser from '../../store/AuthUser'
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
        }
    },

    async created() {

        this.fetchData()

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

        async fetchData() {
            let auth_user = AuthUser.getters.user
            await UserStore.dispatch("fetchUserByID", auth_user.id)
            let res = UserStore.getters.fetchUser
            this.user = res

            await ReviewApi.dispatch("getReviewByUserID", this.user.id)
            let res2 = ReviewApi.getters.getReviewsByUserID
            this.reviews = res2

            this.isLoading = false
            this.editFormat()
        },
    },
}
</script>

<style>
 
</style>