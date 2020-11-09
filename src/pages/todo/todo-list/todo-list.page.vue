<template>
  <p>todo-list</p>
  <TodoListContainer :offset="offset" :limit="limit" />
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import { TodoListContainer } from './containers';

export default defineComponent({
  name: 'TodoListPage',
  components: {
    TodoListContainer
  },
  setup() {
    const route = useRoute();
    const offset = ref(Number(route.query['offset'] || 0));
    const limit = ref(Number(route.query['limit'] || 10));

    watch(
      () => route.query,
      query => {
        offset.value = Number(query['offset']) || 0;
        limit.value = Number(query['limit']) || 10;
      }
    );

    return {
      offset,
      limit
    };
  }
});
</script>
