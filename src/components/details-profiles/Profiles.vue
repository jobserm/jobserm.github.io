<template>
<c-box px="20" py="10">
    <c-box w="90%" align="right">
        <c-button variant-color="vue">Hire</c-button>
    </c-box>
    <c-flex>
      <c-box px="10" w="50%" align="center">
          <c-stack>
                <c-box>
                    <c-flex size="350px" align="center" justify="center">
                        <c-image 
                            size="250px"
                            objectFit="cover"
                            :src="require('@/assets/user.png')" />
                    </c-flex>
                </c-box>
                <c-box py="5">
                    <c-text py="3" fontSize="3xl">
                        James SMITH
                    </c-text>
                    <c-button-group :spacing="3" justify="center">
                        <c-button variant-color="red" size="sm"> Instragram </c-button>
                        <c-button variant-color="cyan" size="sm"> Linkedin </c-button>
                        <c-button variant-color="blue" size="sm"> Facebook </c-button>
                    </c-button-group>
                </c-box>
        </c-stack>
      </c-box>
      <c-box  px="10" w="50%" align="center">
          <c-stack spacing="3">
            <c-box>
                <c-heading size="lg" py="5">Infomation</c-heading>
            </c-box>
            <c-box>
                <c-heading size="lg" py="5">Personality</c-heading>
                <c-text>
                    Introvert Extrovert
                </c-text>

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

// import Job from "../../store/Job"

export default {
    name:"",
 components: {
     
 },
 data() {
     return {
        // job: {},
        // freelancer: {}
     }
 },
//  async mounted(id) {
//      this.job = await Job.dispatch("getByJobId",id);
//      this.freelancer = this.job.user_id
//  },
//  methods: {

//  }
}
</script>

<style>
    
</style>