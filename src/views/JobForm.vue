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
import axios from 'axios'

export default {
    components: {
        PostJob,
    },
    data() {
        return {
            isLoading: false
        }
    },
    methods: {
        async post ({ body, img }) {
            // this method is invoked from child component via @postJob
            console.log('new job is posted!')
            this.isLoading = true
            let res = await JobApi.dispatch('postJob', body)
            if (res.success) {
                let formData = new FormData()
                let token = JSON.parse(localStorage.getItem('auth-jobserm')).access_token
                console.log(token)
                img.forEach(async (file) => {
                    formData.append('photo', file)
                    let res = await axios.post('http://localhost:8000/api/images', formData, {
                            headers: {
                                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('auth-jobserm')).access_token}`,
                                'X-JOB-ID': JobApi.getters.getRecentlyPostedJob.id
                            }
                    })
                    console.log(res)
                    if (res.status === 200) {
                        console.log('upload success')
                        this.isLoading = false
                    }
                    this.$swal("โพสต์งานสำเร็จ", `ตรวจสอบได้ที่หน้ารวมงาน`, "success")
                    this.$router.push("/userJob")
                })
            } else {
                this.isLoading = false
                this.$swal("โพสต์งานไม่สำเร็จ", res.message, "error")
            }
        }
    }
}
</script>

<style>

</style>