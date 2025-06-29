
<script setup>
import { RouterView } from 'vue-router'
import TheMenu from './components/TheMenu.vue'
import { useScoreStore } from './stores/score.store';

useScoreStore()
</script>


<template>
  <main class="game">
    <div class="page">
      <RouterView/>

    </div>

    <TheMenu />

  </main>
</template>
