<template>
    <div class="custom-select" >
        <c-box>
            <c-select 
        transition="all 0.2s"
        rounded="md"
        border-width="1px"
        :_hover="{ bg: 'indigo.100' }"
        :_expanded="{ bg: 'indigo.100' }"
        :_focus="{ outline: 0, boxShadow: 'outline' }" right-icon="chevron-down" v-model="country" placeholder="จังหวัด">
            <option value="นครราชสีมา">นครราชสีมา</option>
            <option value="เชียงใหม่">เชียงใหม่</option>
            <option value="กาญจนบุรี">กาญจนบุรี</option>
            </c-select>
        </c-box>
            
    </div>
    
</template>

<script>
export default {
    data() {
    return {
      country: ''
    }
  }


}
</script>

<style>

</style>