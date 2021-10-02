<template>
  <h1 class="text-4xl">
    <strong>Blood data</strong>
  </h1>

  <p class="mt-8 text-gray-500">Blood pressure is the force of blood pushing against the walls of your arteries as your heart pumps blood.</p>
  <p class="mt-2 text-gray-500">"Systolic" is your blood pressure when your heart beats while pumping blood, "Diastolic" is your blood pressure when your heart is at rest between beats.</p>

  <h2 class="mt-8 mb-6 text-xl">Measure your blood pressure</h2>
  <p class="mt-2 mb-6 text-gray-500">Make sure to wait 10 minutes to let your body relax before measuring your blood pressure.</p>

  <form class="flex gap-2" @submit="saveMeasurement">
    <input type="number" class="flex-grow rounded text-xl p-2 w-24 shadow" placeholder="Systolic" v-model="newMeasurement.sys">
    <input type="number" class="flex-grow rounded text-xl p-2 w-24 shadow" placeholder="Diastolic" v-model="newMeasurement.dia">
    <input type="number" class="flex-grow rounded text-xl p-2 w-24 shadow" placeholder="BPM" v-model="newMeasurement.bpm">
    <button type="submit" class="bg-red-500 text-gray-50 px-4 rounded shadow">&gt;</button>
  </form>

  <h2 class="mt-8 mb-6 text-xl">Your last measurements</h2>

  <table class="w-full">
    <thead>
    <tr>
      <th class="text-left px-1 py-1 text-gray-500 uppercase tracking-wider">Date</th>
      <th class="text-right px-1 py-1 text-gray-500 uppercase tracking-wider">Sys</th>
      <th class="text-right px-1 py-1 text-gray-500 uppercase tracking-wider">Dia</th>
      <th class="text-right px-1 py-1 text-gray-500 uppercase tracking-wider">BPM</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="measurement in measurements">
      <td class="text-left px-1 py-1">{{ DateTime.fromISO(measurement.date).setLocale('en').toRelative() }}</td>
      <td class="text-right px-1 py-1">{{ measurement.sys }}</td>
      <td class="text-right px-1 py-1">{{ measurement.dia }}</td>
      <td class="text-right px-1 py-1">{{ measurement.bpm }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { DateTime } from 'luxon';

const measurements = ref([
  { date: '2021-10-02T03:57:12', sys: 120, dia: 80, bpm: 60 },
  { date: '2021-10-02T04:28:26', sys: 118, dia: 82, bpm: 54 },
  { date: '2021-10-02T05:36:50', sys: 124, dia: 78, bpm: 72 },
])

let newMeasurement = ref({
  date: '',
  sys: undefined,
  dia: undefined,
  bpm: undefined,
})

function saveMeasurement() {
  newMeasurement.value.date = DateTime.now().toISO();

  if (newMeasurement.value.sys && newMeasurement.value.dia && newMeasurement.value.bpm){
    measurements.value.push(Object.assign({}, newMeasurement.value));
  }
}
</script>
