<template>
      <c-stack
        wrap="wrap"
        rounded="0.3rem"
        p="3"
        bgColor="brand.400">

            <c-flex>
                <c-image v-bind:src="job.image" 
                         w="5rem"
                         p="2"/>

                <c-stack lineHeight="2" pl="5">
                    <c-text as="h3" fontSize="3xl" textAlign="center" pb="1">{{ job.title }}</c-text>
                    <c-text>รายละเอียดงาน : {{ job.description }}</c-text>
                    <c-text>คุณสมบัติผู้สมัคร : {{ job.requirement }}</c-text>
                    <c-text>ประเภทงาน : ตองอาบน้ำ</c-text>
                    <c-text>จังหวัด : {{ job.province }}</c-text>
                    <c-text>ค่าตอบแทน : {{ job.compensation }}</c-text>
                    <c-text>สถานะ : {{ job.status }}</c-text>
                    <c-text>ผู้รับผิดชอบงาน : {{ job.is_selected }}</c-text>
                </c-stack>
    
            </c-flex>

        </c-stack>

</template>

<script>
export default {
    props: ['job']
}
</script>

<style>

</style>