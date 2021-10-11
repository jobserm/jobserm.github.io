<template>
   <c-box px="20" py="10">
      <c-stack>
          <c-heading py="12">ผู้ที่สนใจ <br> {{ title }}</c-heading>
      </c-stack>

      <c-flex>
          <div v-for="image in job_images" :key="image">
              <c-image 
              :src="require(`${image.dog}`)"
              w="350px"
              objectFit="scale-down"
              p="2"
              />
          </div>
      </c-flex>


      <c-simple-grid :columns="[1, 1, 1, 4]" spacing="8" align="center" py="16">
        <div v-for="freelancer in freelancers" :key="freelancer.id">
            <router-link to="/" >   
              <info
                :image="require(`${freelancer.path}`)"
                :freelancerName="freelancer.freelancerName"
                :rating="freelancer.rating"
                :gender="freelancer.gender"
                :age="freelancer.age"
                :star="require(`./star.png`)"
              
              />
            </router-link>
        </div>
      </c-simple-grid>


  </c-box>
</template>

<script>
import info from "./Info.vue"
export default {
  components: { info },
  name: "Info",

  data() {
    return {
      freelancers: [
      {
        path: './user.png',
        freelancerName:"ปฏิภาณ บุญสิมมา",
        rating: "4.5",
        gender: "เจ้าหญิง",
        age:"24",
      },
      {
        path: './user.png',
        freelancerName:"คนิตา หวั่นแสง",
        rating: "4.0",
        gender: "ชาย",
        age:"23",
      },
      {
        path: './user.png',
        freelancerName:"กานต์รวี วารินทร์ศิริกุล",
        rating: "4.8",
        gender: "ชาย",
        age:"22",
      },
      {
        path: './user.png',
        freelancerName:"พีรพัฒน์ จิตรเจริญวีรกุล",
        rating: "5.0",
        gender: "หญิง",
        age:"21",
      }],

      title: "พาน้องหมาไปเดินเล่น 10 ตัว",
      
      job_images:[
        {
          dog: "./dog_walking_1.jpg"
        },
        {
          dog: "./dog_walking_2.jpg"
        },
                {
          dog: "./dog_walking_3.jpg"
        },


      ]
    };
  },  

  async created() {


  }
}
</script>

<style>

</style>