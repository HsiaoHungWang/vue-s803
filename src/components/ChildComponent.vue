<script setup>
//定義父組件傳過來的參數Props
    const props = defineProps({
        xyz: String,
        abc: Number,
        email: String
    })
    //定義父組件傳過來的事件
    const emit = defineEmits(["myEvent"])
    
    const clickHandler = ()=>{
        //觸發父組件傳過來的事件
        emit("myEvent", "Jack@company.com")
    }
</script>

<template>
    <div>
     <h2>Child Component</h2>
     <p>Hello, {{ xyz }}. You are {{ abc }} years old.</p>
     <p>Email: {{ email }}</p>
     <button @click="clickHandler">click</button>
    </div>
</template>

<style lang="css" scoped>
  div{
    background-color: silver;
  }
</style>