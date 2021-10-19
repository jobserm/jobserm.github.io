<template>
  <div>
      <loading v-if="loading" />

      <c-text fontSize="4xl" ml="20rem" mt="2rem">Upload File</c-text>

      <c-image  w="15rem"
                h="15rem"
                ml="30rem"
                mt="3rem"
                src="https://cdn.shopify.com/s/files/1/0624/6741/products/content.jpg?v=1436808045" />
      <c-input 
                ml="30rem" 
                mt="2rem"
                w="30rem"
                type="file"
                multiple
                @change="handleFilesUpload( $event )"
      />
      <c-button bgColor="blue.400" color="white" mt="3rem" ml="32rem" width="170px" @click="uploadFiles">UPLOAD</c-button>
  </div>
</template>

<script>
import axios from "axios"
import Loading from '../components/miscellaneous/Loading.vue'

export default {
  components: { Loading },
    data() {
        return {
            files: [],
        }
    },
    methods: {
        handleFilesUpload(event) {
            this.files = [...event.target.files]
        },
        async uploadFiles() {
            try {
                let formData = new FormData()
                this.files.forEach(async (file) => {
                    formData.append('photo', file)
                    let res = await axios.post('http://localhost:8000/api/images', formData, {
                        headers: {
                            'X-JOB-ID': 1
                        }
                    })
                    console.log(res)
                    if (res.status === 200) {
                        console.log('upload success!')
                    }
                })
                
            } catch (e) {
                console.log(e)
            }
        }
    }
}
</script>

<style>

</style>