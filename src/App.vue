<script setup>
import AbcComponent from './components/AbcComponent.vue';
import BindingComponent from './components/BindingComponent.vue';
import BmiComponent from './components/BmiComponent.vue';
import ComputedDemo from './components/ComputedDemo.vue';
import CountComponent from './components/CountComponent.vue';
import EevntBinding from './components/EevntBinding.vue';
import FirstComponent from './components/FirstComponent.vue';




</script>

<template>
  <h2>Hello, Vue!!</h2>
  <BmiComponent></BmiComponent>
  <hr />
  <ComputedDemo></ComputedDemo>
  <hr />
  <EevntBinding></EevntBinding>
  <hr />
  <FirstComponent></FirstComponent>
  <AbcComponent></AbcComponent>
  <CountComponent></CountComponent>
  <!-- <abc-component></abc-component> -->
   <BindingComponent></BindingComponent>
</template>

<style scoped></style>
