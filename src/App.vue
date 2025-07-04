<script setup>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

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
import HeaderComponent from './components/HeaderComponent.vue';
import JumbotronComponent from './components/JumbotronComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import DirectiveComponent from './components/DirectiveComponent.vue';
import CategoriesComponent from './components/CategoriesComponent.vue';
import { ref } from 'vue';
import FancyButton from './components/FancyButton.vue';


const mode = ref(import.meta.env.VITE_ENV_TEXT );

</script>

<template>
  <HeaderComponent></HeaderComponent>
  <JumbotronComponent></JumbotronComponent>
  <div class="container mt-3">
  <!-- <h2>Hello, Vue!!</h2> -->
  <!-- <RouterLink to="/">首頁</RouterLink> | 
  <RouterLink to="/about">關於我們</RouterLink> | 
  <RouterLink to="/xyz">聯絡我們</RouterLink> |  
  <RouterLink :to="{name:'home'}">首頁</RouterLink> | 
  <RouterLink :to="{name:'about'}">關於我們</RouterLink> | 
  <RouterLink :to="{name:'contact'}">聯絡我們</RouterLink> | 
  <RouterLink :to="{name:'member', params:{id:1}}">會員中心</RouterLink> | 
  <hr />-->
  <RouterView></RouterView>
  <hr />
  <FancyButton>
    <i class="bi bi-airplane"></i>
    飛機
  </FancyButton>
  <FancyButton>
    <i class="bi bi-apple"></i>
    蘋果
  </FancyButton>
  <!-- <h2>{{ mode }}</h2>
  <hr /> -->
  <!-- <DirectiveComponent></DirectiveComponent> -->

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
   <!-- <CategoriesComponent></CategoriesComponent> -->
   </div>
   <FooterComponent></FooterComponent>
</template>

<style scoped></style>
