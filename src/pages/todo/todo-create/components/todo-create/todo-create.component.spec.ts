import { mount } from '@vue/test-utils';
import { createRouter, createMemoryHistory } from 'vue-router';

import { routes } from '@/router';

import TodoCreate from './todo-create.component.vue';

describe('TodoCreate', () => {
  it('render', async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes,
    });
    router.push('/todos/new');
    await router.isReady();
    const wrapper = mount(TodoCreate, {
      global: {
        plugins: [router],
      },
      props: {
        isFetching: false,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
