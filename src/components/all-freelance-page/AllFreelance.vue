<template>
   <c-box px="20" py="10">
        <loading v-if="isLoading" />
        <div v-if="!isLoading">
            <c-stack>
                <c-heading py="12" size="2xl">ฟรีแลนซ์ที่กำลังหางาน</c-heading>
            </c-stack>

            <c-simple-grid :columns="[1, 1, 1, 5]" spacing="12" align="center" py="16">
                <div v-for="user in users" :key="user.id">

                    <a :href="'#/profiles/'+user.id">   
                    <info
                        v-bind:freelancerName="user.name"
                        v-bind:freelancerLastname="user.lastname"
                        v-bind:rating="user.review"
                        v-bind:age="user.birthdate"
                        :star="require(`./star.png`)"
                    />
                    </a>

                </div>
            </c-simple-grid>

        </div>
  </c-box>
</template>

<script>
import info from "./Info.vue"
import UserStore from "../../store/UserStore";

export default {
    components: { info },
    name: "Info",
    data() {
        return {
            users: [],
            isLoading: true
        }
    },
    async created() {
        await UserStore.dispatch("fetchUsersArePublish")
        let res = UserStore.getters.fetchUsersArePublish
        this.users = res
        console.log("----user--")
        console.log(this.users)
        this.editFormat()
        this.isLoading = false
    },
    methods: {
        async editFormat() {
            this.users.map(item => {
                if (item.birthdate) {
                    let ageDifMs = Date.now() - new Date(item.birthdate).getTime()
                    let ageDate = new Date(ageDifMs)
                    item.birthdate = Math.abs(ageDate.getUTCFullYear() - 1970)
                }
                if (item.review === null) {
                    item.review = 0
                } else {
                    item.review = item.review.toFixed(1)
                }
                return item
            })
        },
    },
    
}
</script>

<style>
</style>