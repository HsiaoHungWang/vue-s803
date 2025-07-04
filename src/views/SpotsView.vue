<script setup>
import SearchKeyword from '@/components/SearchKeyword.vue';
import { ref, watchEffect } from 'vue';

    const baseApi = import.meta.env.VITE_API_BASEURL;
    const apiUrl = `${baseApi}/Spots`;


   //搜尋、分頁、排序的條件
    const terms = ref({
        "keyword":"北投",
        "categoryId":0,
        "sortBy":"spotId",
        "sortType":"desc",
        "page":1,
        "pageSize":9
    })

    //接收API回傳的資料
    const result = ref({
       "totalPages":0,
       "spots":[]
    })

    //將物件轉成QueryString
    // const querystring = new URLSearchParams(terms.value).toString();
    // console.log(querystring)

    watchEffect(async ()=>{
        //https://localhost:7247/api/Spots?keyword=%E5%8C%97%E6%8A%95&categoryId=0&sortBy=spotId&sortType=asc&page=4&pageSize=9
        const querystring = new URLSearchParams(terms.value).toString();
        const response = await fetch(`${apiUrl}?${querystring}`);
        const spot = await response.json();
        
        //將收到JSON放進響應式資料中
        result.value.totalPages = spot.totalPages;
        result.value.spots = spot.spotsResult;
    })
    //searchInput事件發生執行searchInputHandler
    //在子組件觸發searchInput事件
    //在子組件把資料傳給 data 
    const searchInputHandler = data => {
        terms.value.keyword = data;
    }

</script>

<template>
    <div>
<h2>台北市景點</h2>
<div class="row mb-3">
    <div class="col-4"></div>
    <div class="col-4"></div>
    <div class="col-4">
        <SearchKeyword @searchInput="searchInputHandler"></SearchKeyword>
    </div>
</div>
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col" v-for="{spotId, spotTitle, address, spotDescription, spotImage} in result.spots">
    <div class="card h-100">
      <img :src="spotImage" class="card-img-top" :alt="spotTitle">
      <div class="card-body">
        <h5 class="card-title">{{spotId}} {{ spotTitle }}</h5>
        <p class="card-text">{{ spotDescription.substring(0,100)  }}...</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">{{ address }}</small>
      </div>
    </div>
  </div>
  
</div>
    </div>
</template>

<style lang="css" scoped>

</style>