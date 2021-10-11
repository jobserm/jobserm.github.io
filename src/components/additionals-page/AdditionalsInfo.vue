<template>
    <c-stack>
        <c-heading size="md">
            {{ heading }}
        </c-heading>
            <c-text
                as="h2"
                size="md"
                color="primary.800"
                opacity="0.8"
                fontWeight="normal"
                lineHeight="1.5"
                white-space="pre-line"
                >{{ description }}</c-text
            >
    </c-stack>
    
</template>

<script>
export default {
    name: "AdditionalsInfo",
    props: ["heading","description"]
}
</script>

<style>

</style>