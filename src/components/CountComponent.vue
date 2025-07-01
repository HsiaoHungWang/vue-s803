<script setup>
import { ref } from 'vue';

    const count = ref(0);

    const add = ()=>{
        count.value++;
    }

</script>

<template>
    <div>
  <button @click="add">{{ count }}</button>
    </div>
</template>

<style lang="css" scoped>

</style>