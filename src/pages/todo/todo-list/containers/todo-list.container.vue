<template>
  <TodoList :todos="todos" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useTodoStore } from '@/store/todo';

import { TodoList } from '../components';

export default defineComponent({
  name: 'TodoListContainer',
  components: {
    TodoList
  },
  setup() {
    const { todos, fetchAll } = useTodoStore();

    fetchAll({ offset: 0, limit: 10 });

    return {
      todos
    };
  }
});
</script>
