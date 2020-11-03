import { computed } from 'vue';
import { useStore } from 'vuex';

import { Todo } from '../../../models';
import { FETCH_ALL_REQUEST } from '../actions';

export const useTodoStore = () => {
  const store = useStore();
  const todos = computed<Todo[]>(() => store.getters['todo/todos']);
  const fetchAll = (arg: { offset?: number; limit?: number } = {}) => {
    store.dispatch(`todo/${FETCH_ALL_REQUEST}`, arg);
  };

  return {
    todos,
    fetchAll
  } as const;
};
