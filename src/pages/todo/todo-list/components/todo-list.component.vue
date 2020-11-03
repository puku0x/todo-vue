<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TodoList',
  props: {
    todos: {
      type: Object,
      required: true
    }
  }
});
</script>
