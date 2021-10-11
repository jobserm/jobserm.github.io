<template>
  <c-flex justify="center" py="8vh">
    <c-stack w="55rem" >
        <c-form-control>
            <additionals-info @saveInfo="save"/>
        </c-form-control>
    </c-stack>
</c-flex>
</template>

<script>
import AdditionalsInfo from '../components/additionals-page/AdditionalsInfo.vue';

export default {
  components: {
    AdditionalsInfo,
  },
  methods: {
    save (value) {
      console.log(value)
    }
  }

};
</script>
