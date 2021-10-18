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
                <c-text>"{{ "jobUser.username" }}"</c-text>
            </c-flex>
        </c-stack>

        <c-stack mt="2rem" :spacing="3">
                <form action="submit">
                  <AwesomeVueStarRating 
                      v-on:click.native="handleClickStar()"
                  />
                  <!-- <b-form-rating v-model="value"></b-form-rating>
                  <p class="mt-2">Value: {{ value }}</p> -->
                </form>
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
        {{ jobId }}
  </div>
</template>

<script>
import AwesomeVueStarRating from "awesome-vue-star-rating";
import AuthUser from "@/store/AuthUser";
import JobApi from "@/store/JobApi";
import ReviewApi from "@/store/ReviewApi"

export default {
  name: "App",
  components: {
    AwesomeVueStarRating,
  },
  data() {
    return {
        user: {},
        jobs: {},
      form: {
        comment: '',
        job: [],

        star: 5, // default star
        ratingdescription: [
        {
          text: "Poor",
          class: "star-poor",
          // default: 0,
          // type: Number
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
      maxstars: 5,
      disabled: false
      },

    };
  },
  async created() {
    this.job = JSON.parse(localStorage.getItem('YourItem'));
    console.log(this.job)

    // this.jobUser = JSON.parse(localStorage.getItem('FreelanceItem'));
    // console.log(this.jobUser)
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
      await ReviewApi.dispatch("addReview", payload)
    },
    // async getUser
    handleClickStar() {
      let div = document.getElementsByClassName('rating')
      let rating = div[0].innerText.split('\n')[0]
      switch (rating) {
        case 'Poor':
          console.log(1)
          break
        case 'Below Average':
          console.log(2)
          break
        case 'Average':
          console.log(3)
          break
        case 'Good':
          console.log(4)
          break
        case 'Excellent':
          console.log(5)
          break
        default:
          console.log(0)
          break
      }
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