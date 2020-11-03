<template>
  <p>todo-list</p>
  <TodoListContainer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { TodoListContainer } from './containers';

export default defineComponent({
  name: 'TodoListPage',
  components: {
    TodoListContainer
  }
});
</script>
