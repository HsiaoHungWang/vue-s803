<script setup>
import { ref } from 'vue';

    const data = ref('<u>Hello, World!!</u>')
    const isLoading = ref(true)
    setTimeout(()=>{
        isLoading.value = false;
    },3000)

    const isLoggedIn = ref(false)
</script>

<template>
    <div>
      <div>{{data}}</div>
      <div v-text="data"></div>
      <div v-html="data"></div>
      <img src="/images/loading.gif" v-show="isLoading" />
      <!-- <img src="/images/dog.webp" v-show="false" />
      <img src="/images/dog.webp" v-if="false" /> -->
      <div v-if="isLoggedIn">
        <button @click="isLoggedIn=!isLoggedIn">登出</button>
      </div>
      <div v-else>
        <button @click="isLoggedIn=!isLoggedIn">登入</button>
      </div>
    </div>
</template>

<style lang="css" scoped>
/* img{
    width:150px
} */
</style>