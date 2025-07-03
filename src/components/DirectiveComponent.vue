<script setup>
import { ref } from 'vue';

    const data = ref('<u>Hello, World!!</u>')
    const isLoading = ref(true)
    setTimeout(()=>{
        isLoading.value = false;
    },3000)

    const isLoggedIn = ref(false)

    const regions = ref([
        {"name":"新興區", "code":"800"},
        {"name":"前金區", "code":"801"},       
        {"name":"苓雅區", "code":"802"},
        {"name":"鹽埕區", "code":"803"},
        {"name":"鼓山區", "code":"804"},      
        {"name":"旗津區", "code":"805"}
    ])
    const selectedRegion = ref("")
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
      <select v-model="selectedRegion">
        <!--region => {"name":"新興區", "code":"800"} -->
        <option value="">請選擇</option>
        <option v-for="(region,idx) in regions" :key="region.code" :value="region.code">{{idx}} {{ region.name }}</option>
       
      </select><span>{{ selectedRegion }}</span>

      <nav aria-label="Page navigation example">
  <ul class="pagination">   
    <li class="page-item" v-for="i in 5" :key="i"><a class="page-link" href="#">{{i}}</a></li>  
  </ul>
</nav>
    </div>
</template>

<style lang="css" scoped>
/* img{
    width:150px
} */
</style>