<template>
  <div>
      
  </div>
</template>

<script>
import AuthUser from "../store/AuthUser"
export default {
    mounted() {
        AuthUser.dispatch('logout');
        this.$swal("ออกจากระบบสำเร็จ", "แล้วพบกันใหม่", "success");
        this.$router.push('/');
    }
}
</script>

<style>

</style>