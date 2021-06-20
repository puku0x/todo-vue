import { mount } from '@vue/test-utils';
import { createRouter, createMemoryHistory } from 'vue-router';

import { generateTodosMock } from '@/models/testing';
import { routes } from '@/router';

import TodoList from './todo-list.component.vue';

describe('TodoList', () => {
  it('render', async () => {
    const todos = generateTodosMock();
    const router = createRouter({
      history: createMemoryHistory(),
      routes,
    });
    router.push('/todos');
    await router.isReady();
    const wrapper = mount(TodoList, {
      global: {
        plugins: [router],
      },
      props: {
        offset: 0,
        limit: 10,
        todos,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
