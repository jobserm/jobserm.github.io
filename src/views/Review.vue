<template>
    <c-flex justify="center" py="8vh">
    <c-stack w="55rem" >
            <Review />
    </c-stack>
  </c-flex>
</template>

<script>
import Review from '../components/review/Review.vue'
import ReviewApi from '../store/ReviewApi'
export default {
  components: {
      Review
  },
  data() {
    return {
        reviews: {}
    }
  },
  async created() {
    await this.fetchDataReview()
  },
  methods: {
    async fetchDataReview() {
      await ReviewApi.dispatch("fetchData")
      this.reviews = ReviewApi.getters.reviews
    }
  }
  

}
</script>

<style>

</style>