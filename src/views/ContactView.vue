<script setup>
import ChildComponent from '@/components/ChildComponent.vue';
import { ref } from 'vue';


const name = ref('Jack')
const age = ref(30)
const email = ref('Jack@gmail.com')
    
const myHandler = data => {
 //data 參數就是子組件傳過來的資料
 age.value = data;
 console.log(age.value);
}
</script>

<template>
    <div>
<h2>Contact Page - Parent</h2>
<hr />
<!--透過 xyz 自訂屬性，把父組件中 name 的資料傳給子組件-->
<!--透過 abc 自訂屬性，把父組件中 age 的資料傳給子組件-->
<!-- myEvent 是自訂事件，把這個事件傳給子組件，讓子組件透過emit()觸發它-->
<!--myEvent事件觸發後就會執行 myHander 這個函式-->
<ChildComponent :xyz="name" :abc="age" :email @myEvent="myHandler" ></ChildComponent>
    </div>
</template>

<style lang="css" scoped>

</style>
