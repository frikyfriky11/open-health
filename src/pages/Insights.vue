<template>
  <h1 class="text-4xl">
    <strong>A quick tour</strong> of the data we collected.
  </h1>

  <p class="mt-8 text-gray-500">Here you can find some insights computed on the aggregated data we collected during the entire study.</p>

  <h2 class="mt-8 mb-4 text-2xl">Demographic data</h2>

  <h3 class="mt-8 mb-4 text-xl">Based on sex</h3>
  <div class="mb-2">
    <div class="flex items-center mb-2">
      <span class="w-16">M</span>
      <div class="h-4 bg-blue-500 rounded" style="width: 50.18%"></div>
    </div>
    <div class="flex items-center mb-2">
      <span class="w-16">F</span>
      <div class="h-4 bg-blue-500 rounded" style="width: 49.82%"></div>
    </div>
  </div>
  <p class="text-gray-500">The participants were <strong>50.18%</strong> males and <strong>49.82%</strong>.</p>

  <BarChart :items="ages" :total-participants="totalParticipants" label="Based on age">
    <p class="text-gray-500">The average participant was <strong>45 years old</strong>.</p>
    <p class="text-gray-500">The youngest was <strong>18 years old</strong> and the oldest was <strong>94 years old</strong>.</p>
  </BarChart>

  <BarChart :items="yearsOfExaminations" :total-participants="totalParticipants" label="Based on date of examination">
    <p class="text-gray-500">Most of the data was collected during <strong>2015</strong>.</p>
  </BarChart>

  <Divider></Divider>

  <h2 class="mt-8 text-2xl">Alcohol and smoke</h2>

  <BarChart :items="alcohols" :total-participants="totalParticipants" label="Have you ever drunk alcoholic drinks?">
    <p class="text-gray-500">Almost <strong>half</strong> of the participants touched alcoholic drinks at least once in their life.</p>
  </BarChart>

  <BarChart :items="smokes" :total-participants="totalParticipants" label="Do you smoke cigarettes?">
    <p class="text-gray-500">Smokers and non-smokers participants were <strong>almost</strong> the same number.</p>
  </BarChart>

  <Divider></Divider>

  <h2 class="mt-8 mb-4 text-2xl">Diseases</h2>

  <BarChart :items="cancers" :total-participants="totalParticipants" label="Have you ever had cancer?">
    <p class="text-gray-500">Participants with and without cancer were <strong>almost</strong> the same number.</p>
  </BarChart>

  <BarChart :items="thyroids" :total-participants="totalParticipants" label="Have you ever had thyroid disease?">
    <p class="text-gray-500">Participants with and without thyroid diseases were <strong>almost</strong> the same number.</p>
  </BarChart>
</template>

<script lang="ts" setup>
import BarChart from '../components/charts/BarChart.vue';
import Divider from '../components/Divider.vue';

const totalParticipants = 13389;

const ages = [
  { group: '18-19', value: 134 },
  { group: '20-29', value: 1571 },
  { group: '30-39', value: 2704 },
  { group: '40-49', value: 3305 },
  { group: '50-59', value: 2907 },
  { group: '60-69', value: 1730 },
  { group: '70-79', value: 777 },
  { group: '80-89', value: 232 },
  { group: '90-94', value: 29 },
]

const yearsOfExaminations = [
  { group: '2011', value: 291 },
  { group: '2012', value: 1018 },
  { group: '2013', value: 1830 },
  { group: '2014', value: 2645 },
  { group: '2015', value: 2861 },
  { group: '2016', value: 2518 },
  { group: '2017', value: 1680 },
  { group: '2018', value: 546 },
]

const alcohols = [
  { group: 'YES', value: 6474 },
  { group: 'NO', value: 6267 },
]

const smokes = [
  { group: 'YES', value: 6012 },
  { group: 'NO', value: 6037 },
]

const cancers = [
  { group: 'YES', value: 6046 },
  { group: 'NO', value: 6051 },
]

const thyroids = [
  { group: 'YES', value: 6114 },
  { group: 'NO', value: 5900 },
]
</script>
