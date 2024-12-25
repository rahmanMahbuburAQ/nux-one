<template>
    <div class="flex items-center justify-center mt-12">
      <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 class="text-2xl font-bold text-center text-gray-800 mb-6">Login</h1>
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
  
        <div class="mt-6">
          <button
            @click="handleGoogleSignIn"
            class="w-full px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
          >
            Sign In with Google
          </button>
        </div>
  
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
  import { useNuxtApp, useRouter } from '#app';
  import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
  
  const { $auth } = useNuxtApp(); // Access Firebase `auth` service globally
  const router = useRouter();
  
  const email = ref('');
  const password = ref('');
  
  const handleLogin = async () => {
    try {
      if (!email.value || !password.value) {
        alert('Please fill out all fields.');
        return;
      }
  
      // Login using Firebase email/password authentication
      const userCredential = await signInWithEmailAndPassword($auth, email.value, password.value);
      console.log('Logged in user:', userCredential.user);
  
      alert('Login successful!');
      router.push('/'); // Redirect to home page after successful login
    } catch (error) {
      console.error('Login error:', error.message);
      alert(error.message || 'Invalid credentials. Please try again.');
    }
  };
  
  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup($auth, provider);
  
      // Access Google account details
      console.log('Google Sign-In user:', result.user);
  
      alert('Google Sign-In successful!');
      router.push('/'); // Redirect to home page after successful login
    } catch (error) {
      console.error('Google Sign-In error:', error.message);
      alert(error.message || 'Google Sign-In failed. Please try again.');
    }
  };
  </script>
  
  
  