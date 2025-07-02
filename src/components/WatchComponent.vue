<script setup>
import { ref, watch, watchEffect } from 'vue';

    const formatTime = (today)=>{
        const hours = today.getHours().toString().padStart(2,'0');
        const minutes = today.getMinutes().toString().padStart(2,'0');
        const seconds = today.getSeconds().toString().padStart(2,'0');

        return `${hours}:${minutes}:${seconds}`
    }

    const clock = ref(formatTime(new Date()));

    //監看clock資料的變化
    //第一次載入時不會執行
    watch(clock,(newTime, oldTime)=>{
        //DOM存取
        //全域變數的值
        //串接API
        console.log(`新：${newTime}, 舊：${oldTime}`)
    })
    //第一次載就會執行
    watchEffect(()=>{
        //DOM存取
        //全域變數的值
        //串接API
        console.log('watchEffect：', clock.value);
    })

    const changeTime = ()=>{
        clock.value = formatTime(new Date());
    }
</script>

<template>
    <div>
        <button @click="changeTime()">改變時間</button>
      <h2>{{ clock }}</h2>
    </div>
</template>

<style lang="css" scoped>

</style>