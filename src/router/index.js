import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('../pages/Dashboard.vue')
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../pages/Auth.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../pages/Profile.vue')
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ENV),
  routes,
});

export default router;
