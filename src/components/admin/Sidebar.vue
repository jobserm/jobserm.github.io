<template>
  <div>
      <c-flex
      left="5"
      h="100%"
      mt="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      w="32vh"
      flexDirection="column"
      justify="space-between">
        <c-flex
        p="5%"
        flexDirection="column"
        alignItems="flex-start"
        >
        <c-box w="100%">
            <router-link to="/admin">
                <NavItem menu="Dashboard" icon="home"/>
            </router-link>
        </c-box>
        <c-box w="100%">
            <router-link to="/admin/jobs">
                <NavItem menu="Jobs & Categories" icon="briefcase"/>
            </router-link>
        </c-box>
        <c-box w="100%">
            <router-link to="/admin/review">
                <NavItem menu="Review" icon="star"/>
            </router-link>
        </c-box>
        <c-box w="100%">
            <router-link to="/admin/accountsetting">
                <NavItem menu="Account Management" icon="user"/>
            </router-link>
        </c-box>
        </c-flex>

        <c-flex
        p="5%"
        flexDirection="column"
        w="100%"
        alignItems="flex-start"
        mb="4"
        >
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