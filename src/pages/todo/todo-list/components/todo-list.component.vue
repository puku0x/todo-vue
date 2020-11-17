<template>
  <h2>todo-list</h2>
  <p>
    <router-link to="/todos/new">Add a new todo</router-link>
  </p>
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
    <li v-for="todo in todos" :key="todo.id">
      <router-link
        :class="[{ completed: todo.completed }]"
        :to="`/todos/${todo.id}`"
      >
        {{ todo.title }}
      </router-link>
    </li>
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
  emits: ['change-offset', 'change-limit'],
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

<style lang="scss" scoped>
.completed {
  text-decoration: line-through;
}
</style>
