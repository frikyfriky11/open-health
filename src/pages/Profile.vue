<template>
  <h1 class="text-4xl">
    <strong>Stefano Previato</strong>
  </h1>

  <p class="mt-8 text-gray-500">Find and enrich your own data here.</p>
  <p class="mt-2 text-gray-500">Remember that when you're adding new data, the researchers will be able to collect them and do further analysis.</p>

  <h2 class="mt-8 mb-6 text-xl">Your data is <strong>yours</strong>.</h2>
  <p class="mt-2">Privacy is no joke, and we strongly believe people should always be in control of their data.</p>
  <p class="mt-2">If you want to stop sharing data, you can turn off data sharing at anytime.</p>

  <Divider></Divider>

  <div class="grid grid-cols-2 gap-4">
    <GridButton :icon="HeartIcon" color="bg-red-500" label="Blood" link="/profile/blood"></GridButton>
    <GridButton :icon="CakeIcon" color="bg-blue-500" label="Glucose" link="/profile/glucose"></GridButton>
    <GridButton :icon="FaceIcon" color="bg-green-500" label="Mood" link="/"></GridButton>
  </div>
</template>

<script lang="ts" setup>
import Divider from '../components/Divider.vue';
import HeartIcon from '../components/icons/HeartIcon.vue';
import CakeIcon from '../components/icons/CakeIcon.vue';
import FaceIcon from '../components/icons/FaceIcon.vue';
import GridButton from '../components/GridButton.vue';
</script>
