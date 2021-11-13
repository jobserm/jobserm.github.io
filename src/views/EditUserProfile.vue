<template>
<c-flex justify="center" py="8vh">
    <c-stack w="55rem" >
        <c-form-control>
            <EditForm/>
        </c-form-control>
    </c-stack>
</c-flex>
</template>

<script>
import EditForm from "../components/form/EditForm.vue";
import AuthUser from "../store/AuthUser";
import axios from "axios"

export default {
    components: {
        EditForm,
    },
    
}
</script>

<style>

</style>