<script setup>
import AbcComponent from './components/AbcComponent.vue';
import BindingComponent from './components/BindingComponent.vue';
import BmiComponent from './components/BmiComponent.vue';
import ComputedDemo from './components/ComputedDemo.vue';
import CountComponent from './components/CountComponent.vue';
import EevntBinding from './components/EevntBinding.vue';
import FirstComponent from './components/FirstComponent.vue';
import WatchComponent from './components/WatchComponent.vue';
import AboutView from './views/AboutView.vue';
import ContactView from './views/ContactView.vue';
import HomeView from './views/HomeView.vue';




</script>

<template>
  <h2>Hello, Vue!!</h2>
  <RouterLink to="/">首頁</RouterLink> | 
  <RouterLink to="/about">關於我們</RouterLink> | 
  <RouterLink to="/xyz">聯絡我們</RouterLink> | 
  <hr />
  <RouterView></RouterView>

  <!-- <HomeView></HomeView>
  <AboutView></AboutView>
  <ContactView></ContactView> -->


   <!--  <WatchComponent></WatchComponent>
  <hr />
  <BmiComponent></BmiComponent>
  <hr />
  <ComputedDemo></ComputedDemo>
  <hr />
  <EevntBinding></EevntBinding>
  <hr />
  <FirstComponent></FirstComponent>
  <AbcComponent></AbcComponent>
  <CountComponent></CountComponent>
<abc-component></abc-component>
   <BindingComponent></BindingComponent> -->
</template>

<style scoped></style>
