<template>
<c-box px="20" py="10">
    <c-flex>
      <c-box>
          <c-stack 
                wrap="wrap"
                rounded="0.5rem"
                p="5"
                bgColor="brand.400" 
                shadow="xl" 
                size="400"
                border-width="1px"
                >

                <c-box w="250px" justify="center">
                    <c-image v-bind:src="require('./user.png')" 
                            w="15rem" l="" 
                            borderRadius="50%" 
                            marginTop="auto"
                            py="2"/>
                </c-box>

            <c-heading size="md" pb="2" align="center">{{ user.name +" " + user.lastname }} </c-heading>

            <c-flex justify="center" >
                <c-image v-bind:src="star" 
                        w="20px"
                        h="20px"
                        />
                        
                <c-text
                    as="h2"
                    size="md"
                    color="primary.800"
                    opacity="0.9"
                    fontWeight="normal"
                    lineHeight="1.5"
                    pl="2"
                    > {{ user.review }} / 5
                </c-text>

            </c-flex>

                <c-box>
                    <c-text
                        as="h2"
                        size="md"
                        color="primary.800"
                        opacity="0.8"
                        fontWeight="normal"
                        lineHeight="1.7"
                        white-space="pre-line"
                        > อายุ : {{ user.birthdate }}
                    </c-text>
                </c-box>

            </c-stack>
      </c-box>
  </c-flex>
</c-box>
</template>

<script>
export default {
    name: "InfoProfile",
    props: ["ProfileName", "star", "rating", "age"],

    data() {
     return {
         id:'',
         user:[],
     }
 },

 async created() {
     console.log("--created-------")
     this.user = JSON.parse(localStorage.getItem("user"))
     console.log(this.user)
 },
}
</script>

<style>

</style>