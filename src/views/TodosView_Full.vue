<script setup>
import TodosAdd from '@/components/TodosAdd.vue';
import TodosFooter from '@/components/TodosFooter.vue';
import { computed, ref, watchEffect } from 'vue';
import { useTodoStore } from '@/stores/todo';
const storeTodo = useTodoStore();


// const todos = ref(
//     [
//         { "id": "m21uwqfprb0ncx4", "title": "買菜", "completed": false },
//         { "id": "m21w6x73hw2tvrc", "title": "看電視", "completed": true },
//         { "id": "m21w6x73hw2abcd", "title": "睡覺", "completed": true },
//     ]
// )
//從localStorage取得待辦事項
const todos = ref(JSON.parse(localStorage.getItem('todos')))

//取得唯一值
const uniqueId = () => Date.now().toString(36) + Math.random().toString(36).substring(2, 9);


//由子組件觸發執行
const addTodoHandler = todo =>{
    //todo 就是子組件傳過了的待辦事項
    todos.value.push({ "id": uniqueId(), "title": todo, "completed": false})
    
}



//刪除 todo
const removeTodo = todo =>{
    //找到 todo 在 todos 中的索引值
    const idx = todos.value.indexOf(todo)
   
    //刪除 從idx這個位置刪除1筆資料
    todos.value.splice(idx,1)
    
}

//移除所有完成的工作
const removeCompleted = ()=>{
    for(let i=todos.value.length-1;i>=0;i--){
        if(todos.value[i].completed){
            todos.value.splice(i, 1)
        }
    }
}

//計算還有幾個工作未完成
// const remaining = computed(()=>{
//    const activeTodos = todos.value.filter(todo=>!todo.completed)  
//    return activeTodos.length
// })

//待辦事項異動時要存進localStorage
//程式要寫在哪裡

//computed
//watch(todos,(new,old)=>{})

watchEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos.value))
    const activeTodos = todos.value.filter(todo=>!todo.completed) 
    //更新Store中的資料
    storeTodo.qtyChange(activeTodos.length);
})



</script>

<template>
    <div class="row">
        <div class="col-3"> </div>
        <div class="col-6">
            <h3>Todos Page</h3>
            <!--addTodoEvent 是自訂事件，要傳給子組件-->
            <TodosAdd @addTodoEvent="addTodoHandler"></TodosAdd>
            <ul class="list-group mt-3">
                <li v-for="todo in todos" :key="todo.id" class="list-group-item">
                    <div class="d-flex justify-content-between">
                        <div>
                            <input v-model="todo.completed" class="form-check-input me-3" type="checkbox">
                            <label class="form-check-label" :class="{completed:todo.completed}">{{ todo.title }}</label>
                        </div>
                        <button @click="removeTodo(todo)" class="badge bg-danger rounded-pill border-0">X</button>
                    </div>

                </li>
              
            </ul>
          <TodosFooter @removeAll="removeCompleted"></TodosFooter>
        </div>
        <div class="col-3"></div>

    </div>
</template>

<style lang="css" scoped>
.completed {
    color: #949494;
    text-decoration: line-through;
}
</style>