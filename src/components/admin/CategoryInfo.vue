<template>
    <c-stack
        wrap="wrap"
        rounded="0.3rem"
        p="3"
        >

        <c-flex>
            <c-stack lineHeight="2" pl="5">
                <c-text as="h3" fontSize="3xl" textAlign="center" pb="1">{{ category.name }}</c-text>
                <c-button bgColor="yellow.300">แก้ไข</c-button>
                <c-button bgColor="red.300" @click="createAlert">ลบหมวดหมู่นี้</c-button>
            </c-stack>
        </c-flex>

    </c-stack>
</template>

<script>
import CategoryStore from "../../store/CategoryStore"
export default {
    props: ['category'],
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
        //             this.deleteCategory()
        //         this.$swal("ลบเสร็จสิ้น", {
        //         icon: "success",
        //         });
        //         } else {
        //             this.$swal("ยกเลิกการทำรายการ");
        //         }
        //         });
            
        // },
        // async deleteCategory() {
        //     await JobApi.dispatch('removeCategory')
        //     ทำแร้วในstore ยังไม่ได้fetch หลังลบ
  
        //     this.$forceUpdate()
        // }
    }
}
</script>

<style>

</style>