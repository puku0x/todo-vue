import { mount } from '@vue/test-utils';
import { createRouter, createMemoryHistory } from 'vue-router';

import { Todo } from '@/models';
import { routes } from '@/router';

import TodoEdit from './todo-edit.component.vue';

describe('TodoEdit', () => {
  it('render', async () => {
    const todo: Todo = {
      id: '1',
      title: 'title',
      completed: false,
      createdAt: 123456789,
      updatedAt: 123456789,
    };
    const router = createRouter({
      history: createMemoryHistory(),
      routes,
    });
    router.push('/todos/1/edit');
    await router.isReady();
    const wrapper = mount(TodoEdit, {
      global: {
        plugins: [router],
      },
      props: {
        isFetching: false,
        todo,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
