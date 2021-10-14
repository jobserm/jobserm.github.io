<template>
  <div>
      <c-flex
      position="sticky"
      left="5"
      h="100vh"
      mt="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      w="30vh"
      flexDirection="column"
      justify="space-between">
        <c-flex
        p="5%"
        flexDirection="column"
        alignItems="flex-start"
        >
        <c-box w="100%">
            <NavItem menu="Dashboard" />
        </c-box>
        <c-box w="100%">
            <NavItem menu="Jobs" />
        </c-box>
        <c-box w="100%">
            <NavItem menu="Review" />
        </c-box>
        <c-box w="100%">
            <NavItem menu="Account Setting" />
        </c-box>
        </c-flex>

        <c-flex
        p="5%"
        flexDirection="column"
        w="100%"
        alignItems="flex-start"
        mb="4"
        >
            <c-divider />
            <c-flex mt="4" align="center">
                <c-menu>
                    <c-menu-button 
                    right-icon="chevron-down" 
                    justifyContent="flex-start"
                    py=2rem>
                        <c-avatar size="md"/>
                        <c-flex flexDirection="column">
                            <c-heading size="sm">Patipan Boonsimma</c-heading>
                            <c-text>Admin</c-text>
                        </c-flex>
                    </c-menu-button>
                    <c-menu-list p="1rem">Logout</c-menu-list>
                </c-menu>
            </c-flex>
        </c-flex>
      </c-flex>
  </div>
</template>

<script>
import NavItem from "./NavItem.vue";
export default {
    components: {
        NavItem,
    }
}
</script>

<style>

</style>