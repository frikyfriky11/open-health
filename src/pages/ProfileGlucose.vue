<template>
  <h1 class="text-4xl">
    <strong>Glucose data</strong>
  </h1>

  <p class="mt-8 text-gray-500">Blood glucose, also called blood sugar, is a form of sugar that your body can absorb after breaking down the food you eat. Glucose is the body's most common source of energy.</p>
  <p class="mt-2 text-gray-500">People with diabetes often track their glucose levels in order to manage their condition. If you don't have diabetes, knowing your levels over time can help you understand your risk.</p>

  <h2 class="mt-8 mb-6 text-xl">Measure your blood glucose</h2>
  <p class="mt-2 mb-6 text-gray-500">Avoid measuring your glucose levels after eating large amounts of sugar.</p>

  <form class="flex gap-2" @submit="saveMeasurement">
    <input type="number" class="flex-grow rounded text-xl p-2 w-24 shadow" placeholder="Blood glucose" v-model="newMeasurement.glucose">
    <button type="submit" class="bg-blue-500 text-gray-50 px-4 rounded shadow">&gt;</button>
  </form>

  <h2 class="mt-8 mb-6 text-xl">Your last measurements</h2>

  <table class="w-full">
    <thead>
    <tr>
      <th class="text-left px-1 py-1 text-gray-500 uppercase tracking-wider">Date</th>
      <th class="text-right px-1 py-1 text-gray-500 uppercase tracking-wider">Glucose</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="measurement in measurements.sort((a,b) => new Date(b.date) - new Date(a.date))">
      <td class="text-left px-1 py-1">{{ DateTime.fromISO(measurement.date).setLocale('en').toRelative() }}</td>
      <td class="text-right px-1 py-1">{{ measurement.glucose }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { DateTime } from 'luxon';

const measurements = ref([
  { date: '2021-10-02T03:57:12', glucose: 90 },
  { date: '2021-10-02T04:28:26', glucose: 95 },
  { date: '2021-10-02T05:36:50', glucose: 87 },
])

let newMeasurement = ref({
  date: '',
  glucose: undefined,
})

function saveMeasurement() {
  newMeasurement.value.date = DateTime.now().toISO();

  if (newMeasurement.value.glucose){
    measurements.value.push(Object.assign({}, newMeasurement.value));
  }
}
</script>
