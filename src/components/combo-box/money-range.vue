<template>
    <div class="custom-select" >
        <c-menu>
        <c-menu-button  px="4"
        py="2"
        transition="all 0.2s"
        rounded="md"
        border-width="1px"
        :_hover="{ bg: 'gray.100' }"
        :_expanded="{ bg: 'indigo.100' }"
        :_focus="{ outline: 0, boxShadow: 'outline' }" right-icon="chevron-down">
            ค่าจ้าง
        </c-menu-button>
        <c-menu-list>
            <c-menu-item>นครราชสีมา</c-menu-item>
            <c-menu-item>เชียงใหม่ </c-menu-item>
            <c-menu-item>กาญจนบุรี</c-menu-item>
            <c-menu-item>ตาก</c-menu-item>
        </c-menu-list>
        </c-menu>
            
    </div>
    
</template>

<script>
export default {

}
</script>

<style>

</style>