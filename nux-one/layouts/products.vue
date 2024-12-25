<template>
    <div>
      <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4">
            <NuxtLink to="/" class="font-bold text-xl">Nuxt-One</NuxtLink>
        </nav>
      </header>

      <!--- Output the page content -->
      <div class="container mx-auto p-4">
        <slot />
      </div>


      <footer class="container mx-auto p-4 flex justify-between border-t-2">
        <ul class="flex gap-12">
            <li><NuxtLink to="/" class="font-bold text-md ">Home</NuxtLink></li>
            <li><NuxtLink to="/about" class="font-bold text-md">About</NuxtLink></li>
            <li><NuxtLink to="/products" class="font-bold text-md">Products</NuxtLink></li>
          </ul>
      </footer>
    </div>
</template>

<style scoped>


</style>