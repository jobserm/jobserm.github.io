<template>
<c-stack>
    <c-flex
    align="flex-start"
    justify="space-between"
    mx="10vh"
    wrap="wrap"
    py="8vh">
    <c-box>
        <c-text fontSize="4xl">
            Job'Serm
        </c-text>
    </c-box>
    <c-box>
        <c-form-control>
            <post-job @postJob="post"/>
        </c-form-control>
    </c-box>
    <c-box>
        <c-text fontSize="4xl">
            
        </c-text>
    </c-box>
    </c-flex>
</c-stack>
</template>

<script>
import PostJob from '../components/form/PostJob.vue'
import JobApi from '../store/JobApi'
export default {
    components: {
        PostJob,
    },
    methods: {
        async post (value) {
            // this method is invoked from child component via @postJob
            console.log('new job is posted!')
            console.log(value)

            let res = await JobApi.dispatch('postJob', value)
            if (res.success) {
                this.$swal("โพสต์งานสำเร็จ", `ตรวจสอบได้ที่หน้ารวมงาน`, "success")
                this.$router.push("/jobinfo")
            } else {
                this.$swal("โพสต์งานไม่สำเร็จ", res.message, "error")
            }
        }
    }
}
</script>

<style>

</style>