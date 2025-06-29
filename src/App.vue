
<script setup>
import { RouterView } from 'vue-router'
import TheMenu from './components/TheMenu.vue'


</script>


<template>
  <main class="game">
    <div class="page">
      <RouterView />
    </div>
    <TheMenu />
  </main>
</template>
