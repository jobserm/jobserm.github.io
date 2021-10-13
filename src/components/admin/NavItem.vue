<template>
  <div>
      <c-flex
      mt="30"
      flexDirection="column"
      w="100%"
      alignItems="center">
      <c-menu>
        <c-menu-button w="100%" justifyContent="flex-start">
            <c-flex>
                <c-icon v-bind:name="icon"/>
                <c-text ml="5" display="flex">{{ menu }}</c-text>
            </c-flex>
        </c-menu-button>
      </c-menu>
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