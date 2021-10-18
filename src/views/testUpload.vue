<template>
  <div>
      <loading v-if="loading" />
      <c-text>Upload File</c-text>
      <c-input
      type="file"
      multiple
      @change="handleFilesUpload( $event )"
      />
      <c-button @click="uploadFiles">UPLOAD</c-button>
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