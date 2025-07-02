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

    const iSpanUrl = ref('https://www.ispan.com.tw')
    const logoUrl = ref('https://www.ispan.com.tw/_next/image/?url=%2Fimages%2FiSpan_Logo_slogan.png&w=1080&q=75')
    const isDisabled = ref(true);
</script>

<template>
    <div>
      <h2>繫節語法說明</h2>
      <h3>Text Interpolation 插值</h3>
      <p>{{ title }} app {{ 1 + 1 }} is running</p>
      <p>登入帳號 {{ getName() }}</p>
      <p>{{ false ? "yes" : "no" }}</p>
      <p>今天是星期 {{ week[new Date().getDay()] }}</p>
      <p>{{author.books.length===0 ? "沒有" : "有"}} 書</p>

      <h3>屬性繫節 v-bind:屬性</h3>
      <a v-bind:href="iSpanUrl" :title="title">iSpan</a> | 
      <a :href="iSpanUrl">iSpan</a>
      <img :src="logoUrl" />

      <input type="checkbox" v-model="isDisabled">
      <button :disabled="!isDisabled">click</button>
    </div>
</template>

<style lang="css" scoped>

</style>