<template>
  <div class="loading"> 
      <c-spinner 
        size="xl"
        thickness="5px"
        speed="0.65s"
        color="indigo.500"
        empty-color="indigo.100"
      /> 
    </div>
</template>

<script>
export default {
}
</script>

<style>
.loading {
  position: fixed;
  z-index: 999;
  height: 2em;
  width: 2em;
  overflow: show;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.loading:before {
  content: '';
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8));
  background: -webkit-radial-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8));
}
</style>