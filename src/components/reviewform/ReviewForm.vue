<template>
    <div>
        <c-text fontSize="4xl" mt="2rem" textAlign="center">{{ "รีวิว" }}</c-text>
        <c-box
            border="solid"
            borderColor="gray.100"
            borderWidth="0.1rem"
            borderRadius="0.5rem"
            p="2rem"
            w="70%"
            m="auto"
        >
        <c-stack>
            <c-flex justify="center">
                <c-image    w="70px"
                            h="70px" 
                            src="https://stickershop.line-scdn.net/stickershop/v1/product/8724225/LINEStorePC/main.png;compress=true" />
            </c-flex>

            <c-flex justify="center">
                <c-text>"{{"form.username"}}"</c-text>
            </c-flex>
        </c-stack>

        <c-stack mt="2rem" :spacing="3">
                <form action="submit"></form>
                <AwesomeVueStarRating 
                    :star="this.star"
                    :starsize="this.starsize"
                    :hasresults="this.hasresults"
                    :hasdescription="this.hasdescription"
                    :ratingdescription="this.ratingdescription"
                />
        </c-stack>

        <!-- section II -->

        <c-box
            mt="2rem"
            border="solid"
            borderColor="gray.100"
            borderWidth="0.1rem"
            borderRadius="0.5rem"
            p="2rem"
        >
            <c-box>
                <c-text fontSize="2xl">
                    {{ "คอมเม้น" }}
                </c-text>
                <c-text fontSize="md" color="gray.400">
                    {{"Leave your comment"}}
                </c-text>
            </c-box>

            <c-box>
                <c-textarea  focus-border-color="pink.400" v-model="form.comment"/>
            </c-box>
        </c-box>
        </c-box>

        <c-flex justify="space-between" w="25%" m="auto" mb="2rem">
            <router-link to="/" >
                <c-button  color="blue" width="150px" bgColor="#D3EDED "  mt="1.5rem" >
                    ย้อนกลับ
                </c-button>
            </router-link>
            <c-button  width="150px"  variant-color="blue" mt="1.5rem" @click="saveInfo">
                ยืนยัน
            </c-button>
        </c-flex>
  </div>
</template>

<script>
import AwesomeVueStarRating from "awesome-vue-star-rating";
import AuthUser from "@/store/AuthUser";
import JobApi from "@/store/JobApi";

export default {
  name: "App",
  components: {
    AwesomeVueStarRating,
  },
  data() {
    return {
      form: {
        user: {},
        jobs: {},
        comment: '',

        star: 5, // default star
        ratingdescription: [
        {
          text: "Poor",
          class: "star-poor",
        },
        {
          text: "Below Average",
          class: "star-belowAverage",
        },
        {
          text: "Average",
          class: "star-average",
        },
        {
          text: "Good",
          class: "star-good",
        },
        {
          text: "Excellent",
          class: "star-excellent",
        },
      ],
      hasresults: true,
      hasdescription: true,
      starsize: "lg", //xs/6x
      },

    };
  },
  async mounted() {
    this.user = await AuthUser.getters.user;
  },
  methods:{
    async saveInfo() {
      let payload = {
          id: this.user.id,
          comment: this.form.comment
      }
      // console.log("payload.id---", payload.id)
      // console.log("payload.comment---", payload.comment)
      await JobApi.dispatch("addReview", payload)
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0.5rem;
}
</style>