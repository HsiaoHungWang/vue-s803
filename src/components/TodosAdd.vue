<script setup>
import { ref } from 'vue'

const newTodo = ref('')
    //待做事項新增
const enterHandler = ()=>{
    // todos.value.push({ "id": uniqueId(), "title": newTodo.value, "completed": false})
    console.log(newTodo.value)
     newTodo.value = ''
}

//清除輸入的資料
const deleteHandler = () => {
    newTodo.value = ''
}
</script>

<template>
    <div>
 <input v-model="newTodo" @keyup.delete="deleteHandler" @keyup.enter="enterHandler" type="text" class="form-control" autofocus autocomplete="off" placeholder="想要做甚麼?">
    </div>
</template>

<style lang="css" scoped>

</style>