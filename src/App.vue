<template>
  <header class="flex justify-between p-4">
    <h1 class="logo">
      RShuResume
    </h1>
    <div class="wrapper">
      <nav>
        <div
          id="menu"
          class="menu cursor-pointer"
        >
          <span class="material-symbols-outlined"> menu</span>
        </div>
      </nav>
    </div>
  </header>
  <main class="main-container flex justify-center">
    <RouterView />
  </main>
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: #fff;
}

.logo {
  font-size: 18px;
  font-weight: bold;
}
</style>
