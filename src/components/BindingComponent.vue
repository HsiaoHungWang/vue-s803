<script setup>
import { ref } from 'vue';
    console.log(new Date().getDay()) //回傳今天是星期幾 2
    const title = ref('vue')
    const week = ref(["日","一", "二", "三"])
    const author = ref({
        books:[
            'Vue 2 - Advanced Guide',
            'Vue 3 - Basic Guide',
            'Vue 4 - The Mystery'
        ]
    })
    console.log(author.value.books.length);
    const getName = ()=>{
        return title.value
    }
</script>

<template>
    <div>
      <h2>繫節語法說明</h2>
      <h3>Text Interpolation 插值</h3>
      <p>{{ title }} app {{ 1 + 1 }} is running</p>
      <p>登入帳號 {{ getName() }}</p>
      <p>{{ false ? "yes" : "no" }}</p>
      <p>今天是星期 {{}}</p>
      <p>{{}} 書</p>
    </div>
</template>

<style lang="css" scoped>

</style>