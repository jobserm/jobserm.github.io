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
            X
        </c-text>
    </c-box>
    </c-flex>
</c-stack>
</template>

<script>
import PostJob from '../components/form/PostJob.vue'
export default {
    components: {
        PostJob,
    },
    methods: {
        post (value) {
            // this method is invoked from child component via @postJob
            console.log('new job is posted!')
            console.log(value)
        }
    }
}
</script>

<style>

</style>