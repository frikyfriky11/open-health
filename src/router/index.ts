import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: () => import('../pages/Index.vue') },
    {
      path: '/',
      component: () => import('../pages/Layout.vue'),
      children: [
        { path: 'home', component: () => import('../pages/Home.vue') },
        { path: 'insights', component: () => import('../pages/Insights.vue') },
        { path: 'profile', component: () => import('../pages/Profile.vue') },
        { path: 'profile/blood', component: () => import('../pages/ProfileBlood.vue') },
        { path: 'profile/glucose', component: () => import('../pages/ProfileGlucose.vue') },
        { path: 'profile/mood', component: () => import('../pages/ProfileMood.vue') },
        { path: 'research', component: () => import('../pages/Research.vue') },
      ]
    },
  ]
})

export default router
