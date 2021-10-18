<template>
    <c-stack px="25" py="5">
        <c-box w="90%" align="right">
            <c-button variant-color="vue">จ้างงาน</c-button>
        </c-box>
        <info-profile
        :image="require(`${job.path}`)"
        :freelancerName="job.name + job.lastname"
        :rating="job.rating"
        :gender="job.gender"
        :age="job.birthdate"
        :star="require(`./star.png`)"
        />
    </c-stack>
</template>

<script>

import Job from "../../store/JobApi"
import infoProfile from "./InfoProfile.vue"

export default {
    name:"InfoProfile",
    components: {  infoProfile, },
 data() {
     return {
        id:'',
        job:{},
     }
 },

// data() {
//     return {
//       job: {
//         path: './user.png',
//         freelancerName:"ปฏิภาณ บุญสิมมา",
//         rating: "4.5",
//         gender: "เจ้าหญิง",
//         age:"24",
//     }
//     };
// },

//  async created() {
//      this.id = this.$route.params.id;
//      this.job = await Job.dispatch("getJobByID",id);
//  },

 methods: {
    
 }
}
</script>

<style>
    
</style>