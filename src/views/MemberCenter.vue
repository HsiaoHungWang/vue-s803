<script setup>
import { useRoute } from 'vue-router';

   
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
    </div>
</template>

<style lang="css" scoped>

</style>