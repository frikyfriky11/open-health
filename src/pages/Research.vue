<template>
  <h1 class="text-4xl">
    <strong>Help</strong> the researchers.
  </h1>

  <p class="mt-8 text-gray-500">Data is never enough for researchers.</p>
  <p class="mt-2 text-gray-500">Want to help? Keep reading.</p>

  <h2 class="mt-8 mb-6 text-xl">COVID-19 additional research</h2>
  <p class="my-2">Researchers have just posted this questionnaire, it would be great if you could spend a couple minutes answering these simple questions.</p>
  <p class="my-2">Your answers will be treated like the CHRIS study data, and you can revoke your consent anytime you want.</p>

  <form class="mt-8" v-if="!submitted" @submit.prevent="submitForm">
    <fieldset class="flex flex-col gap-2 mb-8" v-for="item in questionnaire">
      <legend class="font-bold mb-4">{{ item.question }}</legend>

      <template v-for="answer in item.answers">
        <div class="flex items-center gap-2 mx-2">
          <input :id="item.id + answer.id" :name="item.id" type="radio" :value="item.id + answer.id">
          <label :for="item.id + answer.id">{{ answer.label }}</label>
        </div>
      </template>
    </fieldset>

    <input type="submit" value="Submit" class="mt-4 font-bold rounded-lg text-xl w-full border p-2 shadow bg-blue-500 text-gray-50">
  </form>

  <div v-else class="bg-green-500 text-gray-50 p-4 rounded-lg shadow mt-8">
    <strong>Submitted!</strong>
    <p>Thank you for helping us understand better the current situation.</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const submitted = ref(false)

const questionnaire = [
  {
    id: 'q1',
    question: 'Did you experience stomach pain during the lockdowns?',
    answers: [
      { id: 'a1', label: 'Yes, every day' },
      { id: 'a2', label: 'Sometimes' },
      { id: 'a3', label: 'Never' },
    ]
  },
  {
    id: 'q2',
    question: 'How was your sleep during the last 2 years of pandemic?',
    answers: [
      { id: 'a1', label: 'Very good' },
      { id: 'a2', label: 'Indifferent' },
      { id: 'a3', label: 'Very bad' },
    ]
  },
  {
    id: 'q3',
    question: 'Did your job allow you to practice smart-working/remote-work?',
    answers: [
      { id: 'a1', label: 'Yes, always' },
      { id: 'a2', label: 'Only on certain days' },
      { id: 'a3', label: 'Never' },
    ]
  },
]

function submitForm() {
  submitted.value = true;
}
</script>
