<template>
    <c-flex alignItems="baseline" pt="2rem" pl="2rem">
        <c-icon v-bind:name="icon" fontSize="2xl" mr="1rem"/>
        <c-text fontSize="2xl">{{ header }}</c-text>
    </c-flex>
</template>

<script>
export default {
    props: ['header', 'icon']
}
</script>

<style>

</style>