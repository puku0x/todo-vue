<template>
  <TodoEdit :isFetching="isFetching" :todo="todo" @on-update="onUpdate" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

import { TodoUpdateDto } from '@/models';
import { useTodoStore } from '@/store';

import { TodoEdit } from '../../components';

export default defineComponent({
  name: 'TodoEditContainer',
  components: {
    TodoEdit,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();
    const { isFetching, todo, fetch, update } = useTodoStore();

    const onUpdate = (id: string, todo: TodoUpdateDto) => {
      update({ id, todo }).then((payload) => {
        const { todo } = payload;
        router.push({ path: `/todos/${todo.id}` });
      });
    };

    fetch({ id: props.id });

    return {
      isFetching,
      todo,
      onUpdate,
    };
  },
});
</script>
