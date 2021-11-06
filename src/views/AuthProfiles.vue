<template>
    <div>
        <auth-profiles />
    </div>
</template>

<script>

import AuthProfiles from "../components/details-profiles/AuthProfiles.vue";
export default {
    name: "AuthProfiles",
    components: {
        'auth-profiles' : AuthProfiles
    }
};

</script>

<style>

</style>