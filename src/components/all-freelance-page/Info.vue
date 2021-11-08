<template>
    <c-stack
        wrap="wrap"
        rounded="0.5rem"
        p="10"
        bgColor="brand.400"
        :_hover="{ bg: '#E2E8F0'}"
        shadow="xl" 
        border-width="1px"
        >
        
        <c-box justify="center">
            <c-image v-bind:src="image" 
                        w="12rem"
                        h="12rem"
                        borderRadius="50%" 
                        marginTop="auto"
                        py="2"/>
        </c-box>
        

        <c-heading size="xl" pb="2">{{ freelancerName }} {{ freelancerLastname }}</c-heading>

        <c-flex justify="center" >
            <c-image v-bind:src="star" 
                    w="30px"
                    h="30px"
                    />
                    
            <c-text
                as="h2"
                fontSize="2xl"
                color="primary.800"
                opacity="0.9"
                fontWeight="normal"
                lineHeight="1.5"
                pl="2"
                > {{ rating }} / 5
            </c-text>
        </c-flex>

        
        <c-flex justify="center">
            <c-text
                as="h2"
                fontSize="2xl"
                color="primary.800"
                opacity="0.8"
                fontWeight="normal"
                lineHeight="1.7"
                white-space="pre-line"
                >อายุ : {{ age }}
            </c-text>
        </c-flex>

    </c-stack>
</template>

<script>
export default {
    name:"Info",
    props: ["freelancerName","freelancerLastname", "star", "rating", "age", "image"]
}
</script>

<style>

</style>