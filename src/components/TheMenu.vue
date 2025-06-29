<script>
import { RouterLink } from 'vue-router';

</script>

<template>
  <div class="menu">
    <RouterLink to="/" custom v-slot="{ isActive, navigate }">
      <i
        class="menu-button fa fa-bullseye"
        :class="{ active: isActive }"
        @click="navigate"
        aria-hidden="true"
      ></i>
    </RouterLink>
    <RouterLink :to="{ name: 'friends' }" custom v-slot="{ isActive, navigate }">
      <i
        class="menu-button fa fa-users"
        :class="{ active: isActive }"
        @click="navigate"
        aria-hidden="true"
      ></i>
    </RouterLink>

    <RouterLink :to="{ name: 'tasks' }" custom v-slot="{ isActive, navigate }">
      <i
        class="menu-button fa fa-tasks"
        :class="{ active: isActive }"
        @click="navigate"
        aria-hidden="true"
      ></i>
    </RouterLink>
  </div>
</template>

