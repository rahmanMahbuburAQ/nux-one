<template>
    <div>
      <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-12 flex justify-between">
            <NuxtLink to="/" class="font-bold text-xl">Nuxt-One</NuxtLink>
          <ul class="flex  gap-24">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/products">Products</NuxtLink></li>
            <!-- <li><NuxtLink to="/login" class="btn">Login</NuxtLink></li>
            <li><NuxtLink to="/register">Register</NuxtLink></li> -->

            <!-- Conditional Navigation -->
            <li v-if="route.path === '/' || route.path === '/about' || route.path === '/products'">
            <NuxtLink to="/login" class="btn">Login</NuxtLink>
            </li>
            <li v-else-if="route.path === '/login'">
            <NuxtLink to="/register" class="btn">Register</NuxtLink>
            </li>
            <li v-else-if="route.path === '/register'">
            <NuxtLink to="/login" class="btn">Login</NuxtLink>
            </li>

          </ul>
  
        </nav>
      </header>

      <!--- Output the page content -->
      <div class="container mx-auto p-12">
        <slot />
      </div>
    </div>
</template>

<script setup>
import { useRoute } from '#app';
import { ref } from 'vue';

const route = useRoute();
const isAuthenticated = ref(false); // Change this to true if user is logged in
</script>

<style scoped>

.router-link-exact-active{
    color: red;
    font-weight: 700;
}




</style>