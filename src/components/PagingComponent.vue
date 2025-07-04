<script setup>
    const props = defineProps({
        totalPages:Number
    })

    const emit = defineEmits(['pagingEvent'])

    const clickHandler = page => {
        emit('pagingEvent', page)
    }
   
</script>

<template>
    <div>
  <nav aria-label="Page navigation example">
        <ul class="pagination">   
            <li @click="clickHandler(i)" class="page-item" v-for="i in totalPages" :key="i"><a class="page-link" href="#">{{i}}</a></li>  
        </ul>
      </nav>
    </div>
</template>

<style lang="css" scoped>

</style>