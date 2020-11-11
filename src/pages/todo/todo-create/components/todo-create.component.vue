<template>
  <router-link to="/todos">back to list</router-link>
  <h2>todo-create</h2>
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
      </tbody>
    </table>
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

import { TodoCreateDto } from '@/models';

interface FormValues {
  title: string;
}

export default defineComponent({
  name: 'TodoCreate',
  props: {
    isFetching: {
      type: Boolean,
      default: false
    }
  },
  emits: ['on-create'],
  setup(props, { emit }) {
    const form = reactive<FormValues>({
      title: ''
    });

    const submit = () => {
      const todo: TodoCreateDto = {
        title: form.title
      };
      emit('on-create', todo);
    };

    return {
      submit,
      form
    };
  }
});
</script>
