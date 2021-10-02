<template>
  <router-link :to="props.link">
    <div :class="['rounded-2xl p-6 text-gray-50 text-xl shadow-lg', props.color]">
      <component :is="icon" class="h-8 w-8 mb-4"></component>
      <span>{{ label }}</span>
    </div>
  </router-link>
</template>

<script lang="ts" setup>
const props = defineProps(['color', 'label', 'icon', 'link']);
</script>
