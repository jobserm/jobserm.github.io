<template>
    
        <c-stack
            w="60rem" 
            ml="3rem"
            rounded="0.5rem"
            p="20"
            bgColor="brand.400"
            shadow="xl" 
            border-width="1px"
            >
            
            <!-- <c-box justify="center">
                <c-image v-bind:src="image" 
                         w="5rem" 
                         borderRadius="50%" 
                         marginTop="auto"
                         py="2"/>
            </c-box> -->
            
            <!-- <c-image :src="require('./user_profile.png')" size="45rem"></c-image> -->
            <c-image :src="require('./user_profile2.png')" size="45rem"></c-image>
    
            <c-heading mt="3rem" align="center" size="2xl" pb="2">{{ freelancerName }} {{ freelancerLastname }}</c-heading>

            <c-flex justify="center" >
                <c-image v-bind:src="star" 
                        w="40px"
                        h="40px"
                        />
                        
                <c-text
                    as="h2"
                    fontSize="4xl"
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
                    fontSize="4xl"
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
    //props: ["image", "freelancerName", "star", "rating", "age"]
    props: ["freelancerName", "freelancerLastname", "star", "rating", "age"]
}
</script>

<style>

</style>