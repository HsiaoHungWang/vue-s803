<script setup>
    import CountComponent from '@/components/CountComponent.vue';
    import FirstComponent from '@/components/FirstComponent.vue';
    import AbcComponent from '@/components/AbcComponent.vue';
    import { ref } from 'vue';
    const items = [FirstComponent, AbcComponent, CountComponent]
    const tabs = ref([
        {"name":"First", "component": FirstComponent},
        {"name":"Abc", "component": AbcComponent},
        {"name":"Count", "component": CountComponent},
    ])
    const activedIndex = ref(0)
    const setActive = index =>{
       activedIndex.value = index
    }
</script>
<template>
    <div>
        <h2>Tabs View</h2>
        <ul class="nav nav-tabs">     
            <li class="nav-item" v-for="(tab,idx) in tabs" :key="tab.name">
                <a class="nav-link" href="#" @mouseover="setActive(idx)" :class="{active1:activedIndex===idx}" >{{tab.name}}</a>
            </li> 
        </ul>
      <div class="mt-3">
         <component :is="tabs[activedIndex].component"></component>
      </div>

       
    </div>
</template>

<style lang="css" scoped>
  .active1{
    background-color: lightcoral;
    color:white
  }
</style>