import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/todos' },
  {
    path: '/todos',
    component: () => import('../pages/todo').then(m => m.TodoListPage)
  }
];

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
