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
            <li v-if="!user && (route.path === '/' || route.path === '/about' || route.path === '/products')">
            <NuxtLink to="/login" class="btn">Login</NuxtLink>
            </li>
            <li v-else-if="!user && route.path === '/login'">
            <NuxtLink to="/register" class="btn">Register</NuxtLink>
            </li>
            <li v-else-if="!user && route.path === '/register'">
            <NuxtLink to="/login" class="btn">Login</NuxtLink>
            </li>


            <!-- Display User Info When Logged In -->
            <li v-if="user" class="flex items-center gap-4 relative -top-2">
            <img
                :src="user.photo"
                alt="Profile Picture"
                class="w-10 h-10 rounded-full object-cover"
            />
            <span class="font-medium text-gray-700">
                {{ user.name.split(' ')[0] }} <!-- First name -->
            </span>
            <span class="font-medium text-gray-500 ml-0">
                {{ user.name.split(' ')[1] || '' }} <!-- Last name (if exists) -->
            </span>
            </li>


          </ul>
  
        </nav>
      </header>

      <!--- Output the page content -->
      <div class="flex-grow container mx-auto p-12">
        <slot />
      </div>

     <div class="m-12">
      <footer class="container mx-auto flex justify-between border-t-2 bg-gray-800 text-white p-4 text-center">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Nuxt-One</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
                <button v-if="user" @click="logout" class="btn mx-12">Logout</button>



            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" class="hover:underline">Nuxt-One™</a>. All Rights Reserved.</span>
    </div>
      </footer>
    </div>

      
    </div>
</template>

<script setup>
import { useRoute } from '#app';
import { ref, onMounted, computed } from 'vue';

const route = useRoute();
const isAuthenticated = ref(false); // Change this to true if user is logged in

import { useNuxtApp } from '#app';
import { onAuthStateChanged } from 'firebase/auth';

const { $auth } = useNuxtApp(); // Access Firebase `auth` service globally
const user = ref(null); // Store authenticated user info

// Listen for user authentication state
const fetchUser = () => {
  $auth.onAuthStateChanged((currentUser) => {
    user.value = currentUser;
  });
};

onMounted(() => {
  // Listen for authentication state changes
  onAuthStateChanged($auth, (currentUser) => {
    if (currentUser) {
      // User is logged in
      user.value = {
        name: currentUser.displayName || 'User',
        email: currentUser.email,
        photo: currentUser.photoURL || '/default-profile.png', // Use default image if no photo
      };
    } else {
      // User is logged out
      user.value = null;
    }
  });
});

const logout = async () => {
  await $auth.signOut();
  user.value = null; // Reset user info
};

</script>

<style scoped>

.router-link-exact-active{
    color: green;
    font-weight: 700;
}

footer {
  position: relative;
  bottom: 0;
  width: 100%;
}



</style>