<template>
  <TodoDetailContainer :id="id" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';

import { TodoDetailContainer } from './containers';

export default defineComponent({
  name: 'TodoDetailPage',
  components: {
    TodoDetailContainer
  },
  setup() {
    const route = useRoute();
    const id = ref(String(route.params['id']));

    return {
      id
    };
  }
});
</script>
