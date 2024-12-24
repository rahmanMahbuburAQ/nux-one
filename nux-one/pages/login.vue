<template>
    <div class="flex items-center justify-center mt-12">
      <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 class="text-2xl font-bold text-center text-gray-800 mb-6">Login88</h1>
        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              v-model="email"
              type="email"
              id="email"
              class="w-full px-4 py-2 text-sm border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              v-model="password"
              type="password"
              id="password"
              class="w-full px-4 py-2 text-sm border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Login
          </button>
        </form>
        <p class="mt-4 text-sm text-center text-gray-600">
          Don't have an account?
          <NuxtLink to="/register" class="text-blue-500 hover:underline">
            Register here
          </NuxtLink>
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const email = ref('');
  const password = ref('');
  
  const handleLogin = async () => {
    try {
      if (!email.value || !password.value) {
        alert('Please fill out all fields.');
        return;
      }
  
      // Simulate a login API call
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve({ success: true }), 1000)
      );
  
      if (response.success) {
        alert('Login successful!');
        router.push('/'); // Redirect to home page after login
      } else {
        alert('Invalid credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred. Please try again.');
    }
  };
  </script>
  
  