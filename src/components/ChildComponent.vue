<script setup>
    const props = defineProps({
        xyz: String,
        abc: Number
    })
</script>

<template>
    <div>
     <h2>Child Component</h2>
     <p>Hello, {{ xyz }}. You are {{ abc }} years old.</p>
    </div>
</template>

<style lang="css" scoped>
  div{
    background-color: silver;
  }
</style>