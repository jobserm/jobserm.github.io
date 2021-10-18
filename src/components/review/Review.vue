<template>
    <div>
        <c-text fontSize="2xl" textAlign="center">{{ "รีวิวทั้งหมด" }}</c-text>
            <div v-for="index in reviews.data" :key="index.id">
                <c-box
                    mt="4vh" 
                    border="solid"
                    bgColor="#F5EEF8"
                    borderColor="7F8C8D"
                    borderWidth="0.1rem"
                    borderRadius="0.5rem"
                    p="0.5rem"
                >

                <c-image w="40px"
                         h="40px" 
                         src="https://storage.googleapis.com/fastwork-static/c645b5d1-7ad5-46ae-88b5-e2463e17a3d7.jpg" />
                <c-box>
                    <c-flex justify="left" mt="0.5rem">
                        <p class="comment">{{ index.comment }}</p>
                    </c-flex>

                    <c-flex justify="right">
                        <c-image    w="30px"
                                    h="30px"
                                    mr="1rem"
                                    src ="https://thumbs.dreamstime.com/b/cute-star-eps-15764821.jpg"/>
                        <p class="rating">{{ index.rating }}</p>
                    </c-flex>
                </c-box> 
                </c-box>
            </div>

            <c-box
                mt="5vh" 
                p="1rem"
            >
                <div class="paginate">
                    <ve-pagination :total="count_review" :page-size="4" :layout="['total', 'prev', 'pager', 'next', 'jumper']" @on-page-number-change="pageNumberChange"></ve-pagination>
                </div> 
            </c-box>
    </div>
</template>

<script>

import ReviewApi from '@/store/ReviewApi'
export default {
    components: { },
    data() {
            return {
                reviews:{},
                count_review:0,
                payload_url:""
            }
    },
    async created() {
        await this.fetchReview();
    },
    methods:{
        async fetchReview(){
            await ReviewApi.dispatch("fetchData")
            this.reviews = ReviewApi.getters.reviews
        },
        async pageNumberChange(pageIndex) {
            this.payload_url = this.reviews.meta.links[pageIndex].url
            await ReviewApi.dispatch("paginate" ,  this.payload_url)
            this.reviews = ReviewApi.getters.reviews
            this.count_review = this.reviews.meta.total
            this.$forceUpdate();

        },
    }
}
</script>

<style>
.paginate{
    display: flex;
    flex-direction: row-reverse;
    position: left;
}

</style>