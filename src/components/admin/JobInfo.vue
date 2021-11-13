<template>
    <c-stack
        wrap="wrap"
        rounded="0.3rem"
        p="3"
        bgColor="white"
        >
            <c-flex>
                <!-- <c-image v-bind:src="job.image" 
                        w="5rem"
                        p="2"/> -->

                <c-stack lineHeight="2" pl="5">
                    <c-text as="h3" fontSize="3xl" textAlign="center" pb="1">{{ job.title }}</c-text>
                    <c-text>รายละเอียดงาน : {{ job.description }}</c-text>
                    <c-text>คุณสมบัติผู้สมัคร : {{ job.requirement }}</c-text>
                    <c-text>ประเภทงาน : {{ job.category_admin || "แหะ"}} </c-text>
                    <c-text>จังหวัด : {{ job.province }}</c-text>
                    <c-text>ค่าตอบแทน : {{ job.compensation }}</c-text>
                    <c-text>สถานะ :
                        <c-badge rounded="full" px="5" variant-color="green" font-size="0.75em" v-if="job.working_status === 'AVAILABLE'">
                        AVALIABLE
                        </c-badge>
                        <c-badge rounded="full" px="5" variant-color="yellow" font-size="0.75em" v-if="job.working_status === 'IN PROGRESS'">
                        IN PROGRESS
                        </c-badge>
                        <c-badge rounded="full" px="5" variant-color="red" font-size="0.75em" v-if="job.working_status === 'FINISH'">
                        FINISH
                        </c-badge>
                    </c-text>
                    <c-text>ผู้รับผิดชอบงาน : {{ job.selected_user_admin }}</c-text>
                    <c-box textAlign="center" v-if="showDeleteBtn">
                        <c-button bgColor="red.300" width="25%" @click="createAlert">ลบงานนี้</c-button>
                    </c-box>
                </c-stack>
            </c-flex>

        </c-stack>
</template>

<script>
import JobApi from '../../store/JobApi'

export default {
    data() {
        return {
            isLoading: true,
        }
    },
    props: ['job', 'showDeleteBtn'],
    methods: {
        async createAlert() {
            await this.$swal({
                title: "ยืนยันการลบ",
                text: "",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then((confirmed) => {
                if (confirmed) {
                    this.deleteJob();
                }
            }).catch((e) => {
                console.log(e)
            })
        },
        async deleteJob() {
            let body = {
                id: this.job.id,
            }
            await JobApi.dispatch('removeJob', body)
            await this.$root.$refs.jobTable.fetchAllJobs();
            await this.$root.$refs.jobInfo.clearJob();
        },
    }
}
</script>

<style>

</style>