<template>
  <TodoListContainer :offset="offset" :limit="limit" />
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { LocationQuery, useRoute } from 'vue-router';

import { TodoListContainer } from './containers';

const toOffset = (query: LocationQuery) => {
  return Number(query['offset'] || 0);
};

const toLimit = (query: LocationQuery) => {
  return Number(query['limit'] || 10);
};

export default defineComponent({
  name: 'TodoListPage',
  components: {
    TodoListContainer
  },
  setup() {
    const route = useRoute();
    const offset = ref(toOffset(route.query));
    const limit = ref(toLimit(route.query));

    watch(
      () => route.query,
      query => {
        offset.value = toOffset(query);
        limit.value = toLimit(query);
      }
    );

    return {
      offset,
      limit
    };
  }
});
</script>
