<template>
  <main class="p-8 h-screen bg-gradient-to-t from-blue-500 to-green-500 flex flex-col items-center justify-center">
    <form class="bg-black backdrop-filter backdrop-blur bg-opacity-50 w-full p-8 rounded-2xl flex flex-col items-center justify-center gap-2 shadow-2xl" @submit.prevent="login">
      <div class="text-blue-500 w-32 rounded-full bg-gray-50 ring ring-blue-100 p-6 mb-8">
        <BeakerIcon></BeakerIcon>
      </div>
      <h1 class="text-4xl font-bold text-gray-50 mb-2">OpenHealth</h1>
      <small class="text-gray-50 mb-8">An EURAC Research project for the CHRIS study</small>

      <input class="rounded-lg text-xl w-full border p-2 shadow" placeholder="Fiscal Code" type="text">
      <input class="rounded-lg text-xl w-full border p-2 shadow" placeholder="Password" type="password">
      <input class="mt-4 rounded-lg text-xl w-full p-2 shadow bg-blue-500 text-gray-50 font-bold disabled:opacity-50 transition transition-opacity" type="submit" value="Login >" :disabled="busy">

      <div>
        <!-- This should be one of the first things to implement before going live -->
        <a href="#" title="Privacy policy">
          <small class="text-gray-50 underline">Privacy policy</small>
        </a>
        |
        <!-- Another useful feature to implement -->
        <a href="#" title="Privacy policy">
          <small class="text-gray-50 underline">Can't login?</small>
        </a>
      </div>
    </form>
  </main>
</template>

<script lang="ts" setup>
import BeakerIcon from '../components/icons/BeakerIcon.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();

const busy = ref(false);

async function login() {
  // Because of the limited time available, there is no real authentication check
  // This would be the right place to setup the authentication flow
  // (possibly an OAuth 2.0 flow, to follow open standards as the entire hackathon
  // is based on that)
  // Just for the sake of aesthetics, here we simulate some kind of API call delay
  busy.value = true;

  setTimeout(async () => {
    await router.push('/home');
    busy.value = false;
  }, 500)
}
</script>
