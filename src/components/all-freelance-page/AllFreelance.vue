<template>
   <c-box px="20" py="10">
      <c-stack>
          <c-heading py="12">ฟรีแลนซ์ที่กำลังหางาน</c-heading>
      </c-stack>

      <c-simple-grid :columns="[1, 1, 1, 5]" spacing="8" align="center" py="16">
        <div v-for="user in users" :key="user.id">
          <router-link to="/profiles" >
            <div @click="freelancerInfo(user.id)">   
              <info
                v-bind:freelancerName="user.name + user.lastname"
                v-bind:rating="user.review || 0"
                v-bind:age="user.birthdate"
                :star="require(`./star.png`)"
              />
            </div>
            </router-link>
        </div>
      </c-simple-grid>


  </c-box>
</template>

<script>
import info from "./Info.vue"
import axios from 'axios'

const auth_key = process.env.VUE_APP_AUTH_KEY || 'auth-jobserm';
export default {
    components: { info },
    name: "Info",
    data() {
        return {
            users: []
        }
    },
    async created() {
        let jwt = JSON.parse(localStorage.getItem(auth_key))
        let res = await axios.get(`http://localhost:8000/api/get-user-is-publish`, {}, { 
            headers: {
                'Authorization': `Bearer ${jwt.access_token}`
            }
        })
        this.users = res.data
        this.convertBirthdate()
    },
    methods: {
        async convertBirthdate() {
            this.users.map(item => {
                if (item.birthdate) {
                    let ageDifMs = Date.now() - new Date(item.birthdate).getTime()
                    let ageDate = new Date(ageDifMs)
                    item.birthdate = Math.abs(ageDate.getUTCFullYear() - 1970)
                }
                return item
            })
        },

        async freelancerInfo(id) {
            
        }
    },
    
}
</script>

<style>
</style>