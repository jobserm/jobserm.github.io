<template>
    <c-flex alignItems="center" pt="2rem" pl="2rem">
        <c-box 
        bgColor="indigo.300" 
        p="0.3rem" 
        borderRadius="0.25rem" 
        mr="1rem"
        box-shadow="lg">
            <c-icon v-bind:name="icon" fontSize="2xl" color="white"/>
        </c-box>
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