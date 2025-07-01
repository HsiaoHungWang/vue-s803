<template>
    <h2>第二個 Component</h2>
    <input type="text" id="text1"/>
</template>
<script setup>
import { onBeforeMount, onMounted } from 'vue';


onBeforeMount(()=>{
    console.log('BeforeMount');
})
 
 //onMounted Hook 發生表示 DOM Tree 產生
onMounted(()=>{
    console.log('Mounted');
 document.querySelector('#text1').focus();
})
</script>
<style scoped>
h2{color:blue}
</style>