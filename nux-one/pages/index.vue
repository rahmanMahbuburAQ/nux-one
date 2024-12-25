<template>
  <h1 class="text-4xl font-bold pb-12">Nuxt-One Drones – A closer inspection</h1>
  <p class="text-md pb-12">‘Drones’. The word sends a shiver down the backs of many people, and rightly so. Drones have recently become notorious for their lethal activities in the Middle East, and people are afraid that they will be used at home. In the United States of America, citizens are becoming aware of the increasing use of ‘Unmanned Aerial Vehicles’ by law enforcements agencies. This is leading to a lot of propositions for new legislations, and while these may seem good at first, what does this really mean? These legislations would negatively affect the rising community of drone hobbyists, who use drones purely for their own entertainment or for filming purposes. These people would be stripped of their hobby, while doing nothing wrong. While these laws are just being lobbied for in the United States of America at the moment, they are raising awareness about drones in other countries, such as New Zealand. If America passes laws about drones, New Zealand will most likely follow. Is this really what we want?</p>
  <p class="text-md pb-12">There is also another group of people who use drones: the hobbyist community. These people build small drones purely for their own entertainment and would be stripped of their hobby by these legislations. These hobbyist drones can range from small remote control helicopters or planes with cameras attached to larger models with fully functioning waypoint and autopilot systems. While this may frighten some people at first, there is nothing inherently threatening about this. So far, the model community has been generally left to police themselves, with a few regulations to govern them. This has actually worked very well so far, with people using common sense and flying their models over large open spaces, and not doing low passes over their neighbourhood. Of course, there are always those few people who ignore caution and do dangerous things, and sadly these are the ones we hear about. However, this can apply to everything, as generally everyone drives carefully, but there are always those few people who ignore common sense and drive under the influence of alcohol, and this is the cause of a lot of the car crashes we hear about in the news. </p>
  <p class="text-md pb-12">Drones are feared around the world, and perhaps the have earned this fear through the United States Military. But drones are used for many peaceful and safe purposes around the world, where they abolish the need of putting someone’s life into risk. A lot of people do not seem to realise this, and just want drones to be banned. I believe this would be a bad thing, as it would severely cripple the industry and hobby of many. While laws and regulations do need to be revised to match the new technology available, this should be thought of carefully, with all sides of the debate taken into close account.</p>
  <div id="default-carousel" class="relative w-full">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
      <!-- Item 1 -->
      <div
        class="duration-700 ease-in-out"
        :class="{ hidden: activeIndex !== 0 }"
        data-carousel-item
      >
        <img
          src="https://images.pexels.com/photos/11178057/pexels-photo-11178057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Dynamic Image"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        />
      </div>
      <!-- Item 2 -->
      <div
        class="duration-700 ease-in-out"
        :class="{ hidden: activeIndex !== 1 }"
        data-carousel-item
      >
        <img
          src="https://images.pexels.com/photos/8876237/pexels-photo-8876237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
      <!-- Item 3 -->
      <div
        class="duration-700 ease-in-out"
        :class="{ hidden: activeIndex !== 2 }"
        data-carousel-item
      >
        <img
          src="https://images.pexels.com/photos/9443065/pexels-photo-9443065.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Dynamic Image"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        />
      </div>
      <!-- Item 4 -->
      <div
        class="duration-700 ease-in-out"
        :class="{ hidden: activeIndex !== 3 }"
        data-carousel-item
      >
        <img
          src="https://images.pexels.com/photos/28712133/pexels-photo-28712133/free-photo-of-close-up-of-mini-3-pro-drone-in-flight.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Dynamic Image"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        />
      </div>
      <!-- Item 5 -->
      <div
        class="duration-700 ease-in-out"
        :class="{ hidden: activeIndex !== 4 }"
        data-carousel-item
      >
        <img
          src="https://images.pexels.com/photos/4075416/pexels-photo-4075416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Dynamic Image"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        />
      </div>
    </div>
    <!-- Slider indicators -->
    <div
      class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse"
    >
      <button
        v-for="index in 5"
        :key="index"
        :class="{'bg-white': activeIndex === index - 1, 'bg-gray-400': activeIndex !== index - 1}"
        class="w-3 h-3 rounded-full"
        aria-current="true"
        @click="goToSlide(index - 1)"
        :aria-label="`Slide ${index}`"
      ></button>
    </div>
    <!-- Slider controls -->
    <button
      @click="prevSlide"
      class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-prev
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button
      @click="nextSlide"
      class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-next
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
          >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeIndex = ref(0); // Track the active slide index
const totalSlides = 5; // Total number of slides

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % totalSlides;
};

const prevSlide = () => {
  activeIndex.value =
    (activeIndex.value - 1 + totalSlides) % totalSlides;
};

const goToSlide = (index) => {
  activeIndex.value = index;
};
</script>

<style scoped>
/* Add necessary styling here */
</style>




