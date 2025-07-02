<script setup>
import { ref } from 'vue';

    // const submitHandler = event=>{
    //     event.preventDefault()
    //     console.log(event);
    // }
    const userName = ref('')
    const userAge = ref(0)
     const submitHandler = event=>{  
        console.log(userAge.value + 10);
        if(userName.value.length === 0){
           alert('請先輸入')
        }
       
    }
</script>

<template>
    <div>
  <form action="/do" v-on:submit.prevent="submitHandler">
    <!--v-model.lazy是把input事件改成blur事件-->
    <lable>姓名：
    <input type="text" name="userName" v-model.lazy.trim="userName" /></lable>
    <p>{{ userName }} {{userName.length}}</p>
    <label>年紀：<input type="number" v-model.number="userAge" /></label>
    <button type="submit">送出</button>
  </form>
    </div>
</template>

<style lang="css" scoped>

</style>