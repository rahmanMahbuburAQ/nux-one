import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig(); // Access runtime configuration

  const firebaseConfig = {
    apiKey: runtimeConfig.public.FIREBASE_API_KEY,
    authDomain: runtimeConfig.public.FIREBASE_AUTH_DOMAIN,
    projectId: runtimeConfig.public.FIREBASE_PROJECT_ID,
    storageBucket: runtimeConfig.public.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: runtimeConfig.public.FIREBASE_MESSAGING_SENDER_ID,
    appId: runtimeConfig.public.FIREBASE_APP_ID,
  };

  // Initialize Firebase app
  const firebaseApp = initializeApp(firebaseConfig);

  // Export Firebase services
  const auth = getAuth(firebaseApp);

  return {
    provide: {
      auth, // Expose `auth` globally via `useNuxtApp().$auth`
    },
  };
});
