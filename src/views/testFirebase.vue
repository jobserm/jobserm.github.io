<template>
  <div>
        <c-text fontSize="3xl">UPLOAD TO FIREBASE</c-text>
        <input type="file" id="input" multiple ref="file" v-on:change="handleFileUpload"/>
        <c-button variant-color="blue" v-on:click="submitFile()">Submit</c-button>
  </div>
</template>

<script>
import Firebase from "../services/Firebase"

export default {
    data() {
        return {
            file: ''
        }
    },
    methods: {
        handleFileUpload() {
            this.file = this.$refs.file.files[0]
            console.log(this.file)
        },
        async submitFile() {
            const dest = `patiolus/${this.file.name}`
            console.log(dest)
            // let formData = new FormData()
            // formData.append('file', this.file)
            await Firebase.uploadFile(this.file, dest)
        }
    }
}
</script>

<style>

</style>