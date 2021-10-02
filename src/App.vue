<template>
  <main class="p-8 pb-32 bg-gray-100 text-gray-800 min-h-screen">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
    <footer class="block fixed inset-x-0 bottom-0 bg-gray-200 flex">
      <template v-for="link in navLinks">
        <router-link active-class="bg-blue-200 text-blue-500" class="p-4 min-h-4 w-full block align-middle flex flex-col items-center gap-2" :to="link.to">
          <component :is="link.icon"></component>
          <span>{{ link.label }}</span>
        </router-link>
      </template>
    </footer>
  </main>
</template>

<script lang="ts" setup>
import HomeIcon from './components/icons/HomeIcon.vue';
import ChartIcon from './components/icons/ChartIcon.vue';
import InfoIcon from './components/icons/InfoIcon.vue';
import UserIcon from './components/icons/UserIcon.vue';

const navLinks = [
  { to: '/', label: 'Home', icon: HomeIcon },
  { to: '/insights', label: 'Insights', icon: ChartIcon },
  { to: '/profile', label: 'Profile', icon: UserIcon },
  { to: '/about', label: 'About', icon: InfoIcon },
];
</script>
