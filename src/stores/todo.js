import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodoStore = defineStore('todo', () => {
    //管理代辦事項數量
    const todos = JSON.parse(localStorage.getItem('todos'));
    const activeTodos = todos.filter(todo => !todo.completed);
    const qty = ref(activeTodos.length);

    const qtyChange = count => {
        qty.value = count
    }

    return { qty, qtyChange }
})