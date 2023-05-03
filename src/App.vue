<template>
  <header class="flex justify-center p-4">
    <div class="container flex justify-between ">
      <h1 class="logo">
        RShuResume
      </h1>
      <div class="wrapper">
        <div
          id="menu"
          class="lg:hidden block menu cursor-pointer"
        >
          <span class="material-symbols-outlined"> menu</span>
        </div>
        <nav>
          <RouterLink 
            v-for="(route, index) in RouterLinks"
            :key="`${route.name}_${index}`"
            active-class="bg-gray-600 lg:bg-yellow-100"
            :to="route.path"
          >
            {{ route.name }}
          </RouterLink>
        </nav>
      </div>
    </div>
  </header>
  <main class="main-container flex justify-center">
    <RouterView />
  </main>
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
type RouteType = {
  path: string,
  name: string
}
const RouterLinks: RouteType[] = ([{path: '/', name: 'Home'},{path: '/Page1', name: 'Page1'},{path: '/Page2', name: 'Page2'}])

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
