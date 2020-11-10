import { computed } from 'vue';
import { useStore } from 'vuex';

import { Todo, TodoCreateDto } from '../../../models';
import { CREATE_REQUEST, FETCH_ALL_REQUEST } from '../actions';
import { featureKey } from '../states';

export const useTodoStore = () => {
  const store = useStore();
  const isFetching = computed<boolean>(
    () => store.getters[`${featureKey}/isFetching`]
  );
  const todos = computed<Todo[]>(() => store.getters[`${featureKey}/todos`]);

  const fetchAll = (
    arg: { offset?: number; limit?: number } = {}
  ): Promise<{ todos: Todo[] }> => {
    return store.dispatch(`${featureKey}/${FETCH_ALL_REQUEST}`, arg);
  };

  const create = (arg: { todo: TodoCreateDto }): Promise<{ todo: Todo }> => {
    return store.dispatch(`${featureKey}/${CREATE_REQUEST}`, arg);
  };

  return {
    isFetching,
    todos,
    fetchAll,
    create
  } as const;
};
