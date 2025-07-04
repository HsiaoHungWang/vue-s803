<script setup>
import { ref } from 'vue';

    const apiUrl = 'https://localhost:7247/api/Categories';
    const categories = ref([]);

    // fetch(apiUrl)
    //  .then(response=>response.json())
    //  .then(datas=>categories.value = datas);
   const loadCategories = async () =>{
     const response = await fetch(apiUrl);
     const datas = await response.json();
     categories.value = datas
   }

   loadCategories();
    

     
     
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