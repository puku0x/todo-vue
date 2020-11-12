<template>
  <TodoCreateContainer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { TodoCreateContainer } from './containers';

export default defineComponent({
  name: 'TodoCreatePage',
  components: {
    TodoCreateContainer
  }
});
</script>
