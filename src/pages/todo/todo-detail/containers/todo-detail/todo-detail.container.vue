<template>
  <TodoDetail :isFetching="isFetching" :todo="todo" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useTodoStore } from '@/store';

import { TodoDetail } from '../../components';

export default defineComponent({
  name: 'TodoDetailContainer',
  components: {
    TodoDetail
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const { isFetching, todo, fetch } = useTodoStore();

    fetch({ id: props.id });

    return {
      isFetching,
      todo
    };
  }
});
</script>
