<template>
  <header>
    <h1 class="logo">
      RShuResume
    </h1>
    <div class="wrapper">
      <nav>
        <div
          id="menu"
          class="menu"
        >
          <span class="material-symbols-outlined"> menu</span>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  width: 100%;
  height: 60px;
  background: #fff;
}

.logo {
  font-size: 18px;
  font-weight: bold;
}
</style>
