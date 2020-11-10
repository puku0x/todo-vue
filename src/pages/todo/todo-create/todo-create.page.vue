<template>
  <p>todo-create</p>
  <TodoCreateContainer />
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { LocationQuery, useRoute } from 'vue-router';

import { TodoCreateContainer } from './containers';

export default defineComponent({
  name: 'TodoCreatePage',
  components: {
    TodoCreateContainer
  }
});
</script>
