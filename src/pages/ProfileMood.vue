<template>
  <h1 class="text-4xl">
    <strong>Mood data</strong>
  </h1>

  <p class="mt-8 text-gray-500">How you feel throughout your day is important, especially when you have anxiety problems.</p>
  <p class="mt-2 text-gray-500">Understanding your mood is essential for mental health and stress control.</p>

  <h2 class="mt-8 mb-6 text-xl">How are you feeling right now?</h2>
  <p class="mt-2 mb-6 text-gray-500">Select the emoji that best represents your current mood.</p>

  <form class="flex gap-2 justify-center">
    <button @click.prevent="saveMeasurement('😃')" class="rounded shadow p-3 bg-white text-3xl">😃</button>
    <button @click.prevent="saveMeasurement('😐')" class="rounded shadow p-3 bg-white text-3xl">😐</button>
    <button @click.prevent="saveMeasurement('😴')" class="rounded shadow p-3 bg-white text-3xl">😴</button>
    <button @click.prevent="saveMeasurement('😢')" class="rounded shadow p-3 bg-white text-3xl">😢</button>
    <button @click.prevent="saveMeasurement('😡')" class="rounded shadow p-3 bg-white text-3xl">😡</button>
  </form>

  <h2 class="mt-8 mb-6 text-xl">Your last measurements</h2>

  <table class="w-full">
    <thead>
    <tr>
      <th class="text-left px-1 py-1 text-gray-500 uppercase tracking-wider">Date</th>
      <th class="text-right px-1 py-1 text-gray-500 uppercase tracking-wider">Mood</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="measurement in measurements.sort((a,b) => new Date(b.date) - new Date(a.date))">
      <td class="text-left px-1 py-1">{{ DateTime.fromISO(measurement.date).setLocale('en').toRelative() }}</td>
      <td class="text-right px-1 py-1">{{ measurement.emoji }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { DateTime } from 'luxon';

const measurements = ref([
  { date: '2021-10-02T03:57:12', emoji: '😃' },
  { date: '2021-10-02T04:28:26', emoji: '😐' },
  { date: '2021-10-02T05:36:50', emoji: '😴' },
])

let newMeasurement = ref({
  date: '',
  emoji: undefined,
})

function saveMeasurement(emoji: string) {
  newMeasurement.value.date = DateTime.now().toISO();
  newMeasurement.value.emoji = emoji;

  measurements.value.push(Object.assign({}, newMeasurement.value));
}
</script>
