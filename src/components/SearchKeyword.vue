<script setup>
import { ref } from 'vue';

    const keyword = ref('');

    const emit = defineEmits(['searchInput'])


    const searchHandler = ()=>{
        // console.log(keyword.value);
        //觸發searchInput事件，會去執行父組件的searchInputHandler function
        //把keywrod.value傳給這個function
        emit('searchInput', keyword.value);

        keyword.value = '';
    }
    const clearHandler = ()=>{
        keyword.value = '';
    }
</script>

<template>
    <div>
  <input type="search" placeholder="關鍵字搜尋" class="form-control" v-model="keyword" @keyup.enter="searchHandler" @keyup.delete="clearHandler" >
    </div>
</template>

<style lang="css" scoped>

</style>