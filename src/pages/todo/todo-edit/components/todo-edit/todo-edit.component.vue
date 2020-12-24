<template>
  <router-link to="/todos">Back to list</router-link>
  <h2>todo-edit</h2>
  <template v-if="todo">
    <form novalidate @submit.prevent="handleSubmit">
      <p>
        <button type="submit" :disabled="isFetching || !isValid">Save</button>
      </p>
      <table>
        <tbody>
          <tr>
            <td>title</td>
            <td>
              <input type="text" name="title" v-model="values.title" />
            </td>
          </tr>
          <tr>
            <td>completed</td>
            <td>
              <input
                type="checkbox"
                name="completed"
                v-model="values.completed"
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
import { PropType, defineComponent, defineEmit, toRef } from 'vue';

import { Todo, TodoUpdateDto } from '@/models';

import { useTodoEditPresenter } from './todo-edit.presenter';

export default defineComponent({
  name: 'TodoEdit',
  props: {
    isFetching: {
      type: Boolean,
      default: undefined,
    },
    todo: {
      type: Object as PropType<Todo | null>,
      default: null,
    },
  },
  emits: {
    'on-update': defineEmit<(id: string, todo: TodoUpdateDto) => void>(),
  },
  setup(props, { emit }) {
    const onUpdate = (id: string, todo: TodoUpdateDto) => {
      emit('on-update', id, todo);
    };

    const { isValid, values, handleSubmit } = useTodoEditPresenter({
      todo: toRef(props, 'todo'),
      onUpdate,
    });

    return {
      isValid,
      values,
      handleSubmit,
    };
  },
});
</script>
