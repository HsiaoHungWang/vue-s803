<script setup>
    
</script>

<template>
    <div>
  <nav aria-label="Page navigation example">
        <ul class="pagination">   
            <li class="page-item" v-for="i in 10" :key="i"><a class="page-link" href="#">{{i}}</a></li>  
        </ul>
      </nav>
    </div>
</template>

<style lang="css" scoped>

</style>