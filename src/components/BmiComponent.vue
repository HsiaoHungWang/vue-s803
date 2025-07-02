<script setup>
import { computed, ref } from 'vue';

    const height = ref(170);
    const weight = ref(70);
    const bmi = computed(()=>((weight.value/(height.value/100) ** 2)).toFixed(2));
</script>

<template>
    <div>
        <div><label>身高(公分)：<input type="text" v-model.lazy="height" /></label></div>
        <div><label>體重(公斤)：<input type="text" v-model.lazy="weight" /></label></div>  
   
   <p>BMI：{{ bmi }}</p>
    </div>
</template>

<style lang="css" scoped>

</style>