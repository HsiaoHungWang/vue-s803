<script setup>
import { useRoute } from 'vue-router';
import { useCounterStore } from '@/stores/counter';
const storeCounter = useCounterStore();

   
    defineProps({
        id:String
    })

    const route = useRoute()
    console.log('會員編號：', route.params.id)

</script>

<template>
    <div>
        <h3>會員編號 {{ $route.params.id}} 的會員中心</h3>
        <p>會員編號 {{ id }}</p>
        <hr />
        <p>{{ storeCounter.count }}</p>
        <p>{{ storeCounter.doubleCount }}</p>
    </div>
</template>

<style lang="css" scoped>

</style>