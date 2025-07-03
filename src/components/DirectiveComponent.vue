<script setup>
import { ref } from 'vue';

    const data = ref('<u>Hello, World!!</u>')
    const isLoading = ref(true)
    setTimeout(()=>{
        isLoading.value = false;
    },3000)
</script>

<template>
    <div>
      <div>{{data}}</div>
      <div v-text="data"></div>
      <div v-html="data"></div>
      <img src="/images/loading.gif" v-show="isLoading" />
      <!-- <img src="/images/dog.webp" v-show="false" />
      <img src="/images/dog.webp" v-if="false" /> -->
    </div>
</template>

<style lang="css" scoped>
/* img{
    width:150px
} */
</style>