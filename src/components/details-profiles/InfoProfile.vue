<template>
<c-box px="20" py="10">
    <c-flex>
      <c-box px="10" w="50%" align="center">
          <c-stack 
            wrap="wrap"
            rounded="0.5rem"
            p="5"
            bgColor="brand.400" 
            shadow="xl" 
            border-width="1px"
            >
            
            <c-box justify="center">
                <c-image v-bind:src="image" 
                         w="15rem" 
                         borderRadius="50%" 
                         marginTop="auto"
                         py="2"/>
            </c-box>

            <c-heading size="md" pb="2">{{ ProfileName }} (James SMITH) </c-heading>

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
                    > {{ rating }} / 5
                </c-text>
            </c-flex>

            
            <c-stack justify="center">
                <c-text
                    as="h2"
                    size="md"
                    color="primary.800"
                    opacity="0.8"
                    fontWeight="normal"
                    lineHeight="1.7"
                    white-space="pre-line"
                    pr="3"
                    >เพศ : {{ gender }}
                </c-text>


                <c-text
                    as="h2"
                    size="md"
                    color="primary.800"
                    opacity="0.8"
                    fontWeight="normal"
                    lineHeight="1.7"
                    white-space="pre-line"
                    >อายุ : {{ age }}
                </c-text>
            </c-stack>


        </c-stack>
      </c-box>
      <c-box  px="10" w="50%" align="center">
          <c-stack spacing="3">
            <c-box>
                <c-heading size="lg" py="5">ข้อมูลส่วนบุคคล</c-heading>
            </c-box>
            <c-box>
                <c-heading size="lg" py="5">About</c-heading>

            </c-box>
            <c-box>
                <c-tag>

                </c-tag>
            </c-box>
          </c-stack>
      </c-box>
  </c-flex>
</c-box>
</template>

<script>
export default {
    name: "InfoProfile",
    props: ["image", "profileName", "star", "rating", "gender", "age"]
}
</script>

<style>

</style>