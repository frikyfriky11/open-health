<template>
  <main class="p-8 h-screen bg-gradient-to-t from-blue-500 to-green-500 flex flex-col items-center justify-center">
    <div class="text-blue-500 w-32 rounded-full bg-gray-50 ring ring-blue-100 p-6 mb-8">
      <BeakerIcon></BeakerIcon>
    </div>
    <h1 class="text-4xl font-bold text-gray-50 mb-2">OpenHealth</h1>
    <small class="text-gray-50 mb-8">An EURAC Research project for the CHRIS study</small>

    <form class="bg-gray-50 w-full p-8 rounded-2xl flex flex-col gap-2 shadow-2xl" @submit.prevent="navigate">
      <input class="rounded-lg text-xl w-full border p-2 shadow" placeholder="Fiscal Code" type="text">
      <input class="rounded-lg text-xl w-full border p-2 shadow" placeholder="Password" type="password">
      <input type="submit" value="Login >" class="mt-4 rounded-lg text-xl w-full border p-2 shadow bg-blue-500 text-gray-50">
    </form>
  </main>
</template>

<script lang="ts" setup>
import BeakerIcon from '../components/icons/BeakerIcon.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function navigate() {
  router.push('/home');
}
</script>
