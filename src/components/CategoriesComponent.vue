<script setup>
import { onMounted, ref, watch, watchEffect } from 'vue';

    
    const categories = ref([]);

    const baseApi = import.meta.env.VITE_API_BASEURL;
    const apiUrl = `${baseApi}/SpotsCategories`;
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
    // onMounted(async()=>{       
    //    const response = await fetch(apiUrl);
    //    const datas = await response.json();
    //    categories.value = datas
    // })
 

   const loadCategories = async () =>{
     const response = await fetch(apiUrl);
     const datas = await response.json();
     categories.value = datas
   }

   loadCategories();

   //串接API，資料新增
const addCategory = async()=>{
    const datas = {  
        "categoryId":13,
        "categoryName": "bbbbbbbb"
    };

  const response = await fetch(apiUrl,{
    method:'POST',
    body:JSON.stringify(datas),
    headers:{'Content-Type': 'application/json'}
  })
  if(response.ok){
     loadCategories();
  }
}
  //串接API，資料刪除
const deleteCategory = async()=>{
   const response = await fetch(`${apiUrl}/0`, {
     method:'DELETE'
   })
   if(response.ok){
    loadCategories();
   }
}

//串接API，資料修改
const updateCategory = async()=>{
    const datas = {  
        "categoryId":13,
        "categoryName": "xxxxxxxxxxxxx"
    };

   const response = await fetch(`${apiUrl}/13`, {
     method:'PUT',
     body:JSON.stringify(datas),
     headers:{'Content-Type': 'application/json'}   
    })

    if(response.ok){
        loadCategories();
    }
}
     
     
</script>

<template>
    <div>
        <button @click="addCategory">新增</button>
        <button @click="deleteCategory">刪除</button>
        <button @click="updateCategory">修改</button>
    <ul>
        <li v-for="category in categories" :key="category.categoryId">{{ category.categoryName }}</li>
    </ul>
    </div>
</template>

<style lang="css" scoped>

</style>