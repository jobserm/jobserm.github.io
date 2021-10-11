<template>
<c-flex justify="center" py="8vh">
    <c-stack w="55rem" >
        <c-form-control>
            <personal-information @saveInfo="save"/>
        </c-form-control>
    </c-stack>
</c-flex>
</template>

<script>
import PersonalInformation from "../components/form/PersonalInformation.vue"
export default {
    components: {
        PersonalInformation
    },
    methods: {
        save (value) {
            console.log(value)
        }
    }
}
</script>

<style>

</style>