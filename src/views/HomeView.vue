<script setup>
import ScoreProgress from "@/components/ScoreProgress.vue";
import { useClicker } from '../composables/useClicker';


const {img, incrementClickCount} = useClicker()

</script>

<template>
  <div class="game-container">
    <ScoreProgress />
    <div class="header">
      <img src="/coin.png" alt="coin" />
      <h2 class="score" id="score">42</h2>
    </div>
    <div class="circle">
      <img draggable="false" @click="incrementClickCount" ref="img" id="circle" src="/frog.png" />
    </div>
  </div>
</template>
