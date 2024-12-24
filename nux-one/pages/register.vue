<template>
    <div class="flex items-center justify-center mt-12">
      <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 class="text-2xl font-bold text-center text-gray-800 mb-6">Register</h1>
        <form @submit.prevent="handleRegister">
          <div class="mb-4">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              v-model="name"
              type="text"
              id="name"
              class="w-full px-4 py-2 text-sm border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="Enter your full name"
              required
            />
          </div>
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
            Register
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
          Already have an account?
          <NuxtLink to="/login" class="text-blue-500 hover:underline">
            Login here
          </NuxtLink>
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from '#imports'; // Import router for navigation
  const { $auth } = useNuxtApp(); // Access `auth` globally
  import {
    createUserWithEmailAndPassword,
    updateProfile,
    GoogleAuthProvider,
    signInWithPopup,
  } from 'firebase/auth';
  //import { auth } from '~/plugins/firebase.client';
  
  const router = useRouter();
  
  const name = ref('');
  const email = ref('');
  const password = ref('');
  const errorMessage = ref('');
  
  const handleRegister = async () => {
    try {
      if (!name.value || !email.value || !password.value) {
        alert('Please fill out all fields.');
        return;
      }
  
      // Register the user with Firebase
      const userCredential = await createUserWithEmailAndPassword($auth, email.value, password.value);
  
      // Update the user's display name
      await updateProfile(userCredential.user, {
        displayName: name.value,
      });
  
      alert('Registration successful!');
      router.push('/'); // Redirect to Home page after successful registration
    } catch (error) {
      console.error('Registration error:', error.message);
      alert(error.message); // Display error message
    }
  };
  
  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup($auth, provider);
  
      // Access user details
      console.log('User details:', result.user);
      alert('Sign-In successful!');
      router.push('/'); // Redirect to home page after successful sign-in
    } catch (error) {
      console.error('Google Sign-In error:', error.message);
      alert(error.message);
    }
  };
  </script>
  
  