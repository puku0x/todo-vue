import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/todos' },
  {
    path: '/todos',
    component: () => import('./pages/todo/todo-list').then(m => m.TodoListPage)
  },
  {
    path: '/todos/new',
    component: () =>
      import('./pages/todo/todo-create').then(m => m.TodoCreatePage)
  }
];

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
