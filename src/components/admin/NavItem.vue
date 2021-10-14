<template>
  <div>
      <c-flex
      mt="30"
      flexDirection="column"
      w="100%"
      alignItems="stretch"
      >
        <c-button v-bind:left-icon="icon" variant-color="indigo">{{ menu }}</c-button>
      </c-flex>
  </div>
</template>

<script>
export default {
    props: ['menu', 'icon']
}
</script>

<style>

</style>