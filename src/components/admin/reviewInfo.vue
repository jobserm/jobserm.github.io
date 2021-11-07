<template>
      <c-stack
        wrap="wrap"
        rounded="0.3rem"
        p="3"
        >

            <c-flex>
                <c-stack lineHeight="2" pl="5">
                    <c-text as="h3" fontSize="3xl" textAlign="center" pb="1">{{ review.id }}</c-text>
                    <c-text>ความคิดเห็น : {{ review.comment }}</c-text>
                    <c-text>คะแนนรีวิว : {{ review.rating }}</c-text>
                    <c-button bgColor="red.300" @click="createAlert">ลบรีวิวนี้</c-button>
                </c-stack>
            </c-flex>

        </c-stack>
</template>

<script>
import ReviewApi from "../../store/ReviewApi"

export default {
    props: ['review'],

    methods: {
        // async createAlert() {
        //     this.$swal({
        //         title: "ยืนยันการลบ",
        //         text: "",
        //         icon: "warning",
        //         buttons: true,
        //         dangerMode: true,
        //         })
        //         .then((willDelete) => {
        //         if (willDelete) {
        //             this.deleteReview()
        //         this.$swal("ลบเสร็จสิ้น", {
        //         icon: "success",
        //         });
        //         } else {
        //             this.$swal("ยกเลิกการทำรายการ");
        //         }
        //         });
            
        // },
        // async deleteReview() {
        //     await JobApi.dispatch('removeReview')
        //    ยังไม่ได้ fetch review มางงจ้า เช้คในstoreด้วย
        //     this.$forceUpdate()
        // }        
    }
}
</script>

<style>

</style>