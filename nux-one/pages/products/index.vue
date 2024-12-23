<template>
  <div class="grid grid-cols-4 gap-5">
    <div v-for="p in products">
      <ProductCard :product="p"/>
      <!-- <NuxtLink :to="`/products/${p.id}`">{{ p.title }}</NuxtLink> -->
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'products'
  })

  //fetch the products
  const { data: products } = await useFetch('https://fakestoreapi.com/products')

  //1st way to use Meta tag: use meta data inside a component:(override the main Meta in nuxt.config.ts)
  useHead({
    title: 'Nuxt One in products | Nuxt-One products',
    meta: [
      {name:'description', content: 'Nuxt 3 products '}
    ]
  })

</script>



