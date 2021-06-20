import { mount } from '@vue/test-utils';
import { createRouter, createMemoryHistory } from 'vue-router';

import { generateTodoMock } from '@/models/testing';
import { routes } from '@/router';

import TodoEdit from './todo-edit.component.vue';

describe('TodoEdit', () => {
  it('render', async () => {
    const todo = generateTodoMock();
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
