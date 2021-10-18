<template>
  <c-stack justify="center" align="center" px="16%" p="20">
    <c-stack position="relative">
      <c-image :src="require('./bg.svg')" />
      <c-box position="absolute" left="0" top="0" pt="20" pl="20">
        <c-heading size="xl">
          รับคนเข้าทำงาน
        </c-heading>
        <c-heading size="xl">
          กรอกรายละเอียดงานเลย!
        </c-heading>

        <div v-if="!isAuthen()">
          <button-secondary :url="`/login`" text=" กรอกรายละเอียดงานของคุณ" mt="4" />
        </div>
        <div v-if="isAuthen()">
          <button-secondary :url="`/postjob`" text=" กรอกรายละเอียดงานของคุณ" mt="4" />
        </div>
        
      </c-box>
    </c-stack>
  </c-stack>
</template>

<script>
import ButtonSecondary from "../../button/ButtonSecondary.vue";
import AuthUser from "../../../store/AuthUser";
export default {
  components: { ButtonSecondary },

    methods: {
      isAuthen() {
        return AuthUser.getters.isAuthen
      },
  }
};
</script>

<style></style>
