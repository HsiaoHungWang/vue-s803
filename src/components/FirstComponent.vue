<template>
    <!--v-model 用在表單元素-->
    <input type="text" v-model="message" />
    <h2>{{ message }}</h2>
</template>
<script setup>
import { ref } from 'vue';
const message = ref('第一個 Component...')  //宣告 message 是一個響應式資料
</script>
<style scoped>
h2 {
    color: green
}
</style>