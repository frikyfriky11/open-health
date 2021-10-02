<template>
  <h3 class="mt-8 mb-4 text-xl">{{ props.label }}</h3>
  <div class="mb-2">
    <template v-for="item in props.items">
      <div class="flex items-center mb-2">
        <span class="w-16">{{ item.group }}</span>
        <div class="h-4 bg-blue-500 rounded" :style="{ 'width': `${item.value * 100 / props.totalParticipants }%` }"></div>
      </div>
    </template>
  </div>
  <slot></slot>
</template>

<script lang="ts" setup>
const props = defineProps(['items', 'totalParticipants', 'label']);
</script>
