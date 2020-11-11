<template>
  <TodoCreate :isFetching="isFetching" @on-create="onCreate" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { TodoCreateDto } from '@/models';
import { useTodoStore } from '@/store';

import { TodoCreate } from '../components';

export default defineComponent({
  name: 'TodoCreateContainer',
  components: {
    TodoCreate
  },
  setup() {
    const router = useRouter();
    const { isFetching, create } = useTodoStore();

    const onCreate = (todo: TodoCreateDto) => {
      create({ todo }).then(payload => {
        const { todo } = payload;
        router.push({ path: `/todos/${todo.id}` });
      });
    };

    return {
      isFetching,
      onCreate
    };
  }
});
</script>
