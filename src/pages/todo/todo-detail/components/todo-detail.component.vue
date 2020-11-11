<template>
  <router-link to="/todos">Back to list</router-link>
  <h2>todo-detail</h2>
  <template v-if="todo">
    <p>
      <router-link :to="`/todos/${todo.id}`">Edit this todo</router-link>
    </p>
    <table>
      <tbody>
        <tr>
          <td>title</td>
          <td>{{ todo.title }}</td>
        </tr>
        <tr>
          <td>completed</td>
          <td>{{ `${todo.completed}` }}</td>
        </tr>
        <tr>
          <td>createdAt</td>
          <td>{{ datePipe(todo.createdAt) }}</td>
        </tr>
        <tr>
          <td>updatedAt</td>
          <td>{{ datePipe(todo.updatedAt) }}</td>
        </tr>
      </tbody>
    </table>
  </template>
  <template v-else>loading...</template>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TodoDetail',
  props: {
    isFetching: {
      type: Boolean,
      default: undefined
    },
    todo: {
      type: Object,
      default: null
    }
  },
  setup() {
    const datePipe = (date: number) => {
      return new Date(date).toISOString();
    };

    return {
      datePipe
    };
  }
});
</script>
