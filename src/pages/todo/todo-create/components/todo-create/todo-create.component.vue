<template>
  <router-link to="/todos">back to list</router-link>
  <h2>todo-create</h2>
  <form novalidate @submit.prevent="handleSubmit">
    <p>
      <button type="submit" :disabled="isFetching || !isValid">
        Save
      </button>
    </p>
    <table>
      <tbody>
        <tr>
          <td>title</td>
          <td>
            <input type="text" name="title" v-model="values.title" />
          </td>
        </tr>
      </tbody>
    </table>
  </form>
</template>

<script lang="ts">
import { defineComponent, defineEmit } from 'vue';

import { TodoCreateDto } from '@/models';

import { useTodoCreatePresenter } from './todo-create.presenter';

export default defineComponent({
  name: 'TodoCreate',
  props: {
    isFetching: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    'on-create': defineEmit<(todo: TodoCreateDto) => void>()
  },
  setup(props, { emit }) {
    const onCreate = (todo: TodoCreateDto) => {
      emit('on-create', todo);
    };

    const { isValid, values, handleSubmit } = useTodoCreatePresenter({
      onCreate
    });

    return {
      isValid,
      values,
      handleSubmit
    };
  }
});
</script>
