<script setup>
import ChildComponent from '@/components/ChildComponent.vue';
import { ref } from 'vue';


const name = ref('Jack')
const age = ref(30)
    
</script>

<template>
    <div>
<h2>Contact Page - Parent</h2>
<hr />
<!--透過 xyz 自訂屬性，把父組件中 name 的資料傳給子組件-->
<!--透過 abc 自訂屬性，把父組件中 age 的資料傳給子組件-->
<ChildComponent :xyz="name" :abc="age" ></ChildComponent>
    </div>
</template>

<style lang="css" scoped>

</style>
