<template>
  <form>
    offset
    <input
      type="number"
      min="0"
      name="offset"
      :value="offset"
      @change="changeOffset"
    />
    limit
    <input
      type="number"
      min="0"
      name="limit"
      :value="limit"
      @change="changeLimit"
    />
  </form>
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
    },
    offset: {
      type: Number,
      required: true
    },
    limit: {
      type: Number,
      required: true
    }
  },
  emits: ['change-offset', 'changeOffset', 'change-limit', 'changeLimit'],
  setup(props, { emit }) {
    const changeOffset = (event: Event) => {
      if (event.target instanceof HTMLInputElement) {
        emit('change-offset', event.target.value);
      }
    };

    const changeLimit = (event: Event) => {
      if (event.target instanceof HTMLInputElement) {
        emit('change-limit', event.target.value);
      }
    };

    return {
      changeOffset,
      changeLimit
    };
  }
});
</script>
