<script>
import NavBar from "@/components/NavBar";
export default {
  name: 'Navbar',
  inject: ['$chakraColorMode', '$toggleColorMode'],
  components: {
    NavBar
  }
}
</script>

<template>
  <div>
    <NavBar />
    <router-view />
  </div>
</template>
