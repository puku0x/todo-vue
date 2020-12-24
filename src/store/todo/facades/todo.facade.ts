import { computed } from 'vue';
import { useStore } from 'vuex';

import { Todo, TodoCreateDto, TodoUpdateDto } from '@/models';

import {
  FETCH_ALL_REQUEST,
  FETCH_REQUEST,
  CREATE_REQUEST,
  UPDATE_REQUEST,
  REMOVE_REQUEST,
} from '../actions';
import { featureKey } from '../states';

export const useTodoStore = () => {
  const store = useStore();
  const isFetching = computed<boolean>(
    () => store.getters[`${featureKey}/isFetching`]
  );
  const todos = computed<Todo[]>(() => store.getters[`${featureKey}/todos`]);
  const todo = computed<Todo | null>(() => store.getters[`${featureKey}/todo`]);

  const fetchAll = (
    arg: { offset?: number; limit?: number } = {}
  ): Promise<{ todos: Todo[] }> => {
    return store.dispatch(`${featureKey}/${FETCH_ALL_REQUEST}`, arg);
  };

  const fetch = (arg: { id: string }): Promise<{ todo: Todo }> => {
    return store.dispatch(`${featureKey}/${FETCH_REQUEST}`, arg);
  };

  const create = (arg: { todo: TodoCreateDto }): Promise<{ todo: Todo }> => {
    return store.dispatch(`${featureKey}/${CREATE_REQUEST}`, arg);
  };

  const update = (arg: {
    id: string;
    todo: TodoUpdateDto;
  }): Promise<{ todo: Todo }> => {
    return store.dispatch(`${featureKey}/${UPDATE_REQUEST}`, arg);
  };

  const remove = (arg: { id: string }): Promise<{ id: string }> => {
    return store.dispatch(`${featureKey}/${REMOVE_REQUEST}`, arg);
  };

  return {
    isFetching,
    todos,
    todo,
    fetchAll,
    fetch,
    create,
    update,
    remove,
  } as const;
};
