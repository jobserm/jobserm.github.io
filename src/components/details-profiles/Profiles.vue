<template>
    <c-box>
        <c-box  px="20" py="10" >
            <loading v-if="isLoading" />
            <div v-if="!isLoading">
            <c-stack>
                <c-heading align="center" fontSize="5xl" py="5">ประวัติส่วนตัว</c-heading>
            </c-stack>
            
            <c-flex py="16" justify="center">
                <info-profile
                    v-bind:freelancerName="this.user.name"
                    v-bind:freelancerLastname="this.user.lastname"
                    v-bind:rating="this.user.review"
                    v-bind:age="this.user.birthdate"
                    v-bind:image="this.user.img_url"
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
                        pb="5"
                    >
                    ความสามารถ : {{ this.user.skill }}
                    </c-text>
                </c-box>
            </c-flex>
            </div>
            <!-- รีวิว -->
            <c-heading size="2xl" py="5" mt="5rem" ml="5rem" v-if="this.user.review !== 0">รีวิวจากผู้ว่าจ้าง</c-heading>
            <c-simple-grid :columns="[1, 1, 1, 2]" spacing="10" ml="4rem">
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
            user_id : this.$route.params.id
        }
    },

    async created() {
        await this.fetchUser(this.user_id)

        await ReviewApi.dispatch("getReviewByUserID", this.user.id)
        let res = ReviewApi.getters.getReviewsByUserID
        this.reviews = res

        this.editFormat()
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

        async fetchUser(id) {
            await UserStore.dispatch("fetchUserByID", id)
            let res = UserStore.getters.fetchUser
            this.user = res
            this.isLoading = false
        }
    },
}
</script>

<style>
 
</style>