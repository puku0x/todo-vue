<template>
  <router-link to="/todos">Back to list</router-link>
  <h2>todo-edit</h2>
  <template v-if="todo">
    <form novalidate @submit.prevent="submit">
      <p>
        <button type="submit" :disabled="isFetching">
          Save
        </button>
      </p>
      <table>
        <tbody>
          <tr>
            <td>title</td>
            <td>
              <input type="text" name="title" v-model="form.title" />
            </td>
          </tr>
          <tr>
            <td>completed</td>
            <td>
              <input
                type="checkbox"
                name="completed"
                v-model="form.completed"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  </template>
  <template v-else>loading...</template>
</template>

<script lang="ts">
import { defineComponent, reactive, watchEffect } from 'vue';

import { TodoUpdateDto } from '@/models';

interface FormValues {
  title: string;
  completed: boolean;
}

export default defineComponent({
  name: 'TodoEdit',
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
  emits: ['on-update'],
  setup(props, { emit }) {
    const form = reactive<FormValues>({
      title: props.todo?.title,
      completed: props.todo?.completed
    });

    const submit = () => {
      const id = props.todo.id;
      const todo: TodoUpdateDto = {
        id,
        title: form.title,
        completed: form.completed
      };
      emit('on-update', id, todo);
    };

    watchEffect(() => {
      form.title = props.todo?.title;
      form.completed = props.todo?.completed;
    });

    return {
      submit,
      form
    };
  }
});
</script>
