<template>
  <TodoList
    :todos="todos"
    :offset="offset"
    :limit="limit"
    @change-offset="changeOffset"
    @change-limit="changeLimit"
  />
</template>

<script lang="ts">
import { defineComponent, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { useTodoStore } from '@/store';

import { TodoList } from '../components';

export default defineComponent({
  name: 'TodoListContainer',
  components: {
    TodoList
  },
  props: {
    offset: {
      type: Number,
      required: true
    },
    limit: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const { todos, fetchAll } = useTodoStore();

    watchEffect(() => {
      fetchAll({
        offset: props.offset,
        limit: props.limit
      });
    });

    const changeOffset = (offset: number) => {
      const query = {
        ...route.query,
        offset
      };
      router.push({ path: route.path, query });
    };

    const changeLimit = (limit: number) => {
      const query = {
        ...route.query,
        limit
      };
      router.push({ path: route.path, query });
    };

    return {
      todos,
      changeOffset,
      changeLimit
    };
  }
});
</script>
