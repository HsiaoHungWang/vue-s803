<script setup>
import { onMounted, ref, watch, watchEffect } from 'vue';

    
    const categories = ref([]);

    const baseApi = import.meta.env.VITE_API_BASEURL;
    const apiUrl = `${baseApi}/Categories`;
    // console.log(apiUrl)

    // fetch(apiUrl)
    //  .then(response=>response.json())
    //  .then(datas=>categories.value = datas);

    // watchEffect(async()=>{
    //   const response = await fetch(apiUrl);
    //   const datas = await response.json();
    //   categories.value = datas
    // })

    //component 產生DOM Tree
    onMounted(async()=>{       
       const response = await fetch(apiUrl);
       const datas = await response.json();
       categories.value = datas
    })
 

//    const loadCategories = async () =>{
//      const response = await fetch(apiUrl);
//      const datas = await response.json();
//      categories.value = datas
//    }

//    loadCategories();
    

     
     
</script>

<template>
    <div>
    <ul>
        <li v-for="category in categories" :key="category.categoryId">{{ category.categoryName }}</li>
    </ul>
    </div>
</template>

<style lang="css" scoped>

</style>