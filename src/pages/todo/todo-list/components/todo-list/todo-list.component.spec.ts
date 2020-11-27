import { mount } from '@vue/test-utils';
import { createRouter, createMemoryHistory } from 'vue-router';

import { Todo } from '@/models';
import { routes } from '@/router';

import TodoList from './todo-list.component.vue';

describe('TodoList', () => {
  it('render', async () => {
    const todos: Todo[] = [
      {
        id: '1',
        title: 'title',
        completed: false,
        createdAt: 123456789,
        updatedAt: 123456789
      },
      {
        id: '2',
        title: 'title',
        completed: false,
        createdAt: 123456789,
        updatedAt: 123456789
      },
      {
        id: '3',
        title: 'title',
        completed: false,
        createdAt: 123456789,
        updatedAt: 123456789
      }
    ];
    const router = createRouter({
      history: createMemoryHistory(),
      routes
    });
    router.push('/todos');
    await router.isReady();
    const wrapper = mount(TodoList, {
      global: {
        plugins: [router]
      },
      props: {
        offset: 0,
        limit: 10,
        todos
      }
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
