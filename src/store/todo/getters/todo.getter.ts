import { GetterTree } from 'vuex';

import { RootState } from '../../store';
import { TodoState } from '../states';

export const getters: GetterTree<TodoState, RootState> = {
  isFetching: (state) => state.isFetching,
  selectedId: (state) => state.selectedId,
  todos: (state) => state.todos,
  todo: (state) => {
    return state.selectedId
      ? state.todos.find((todo) => todo.id === state.selectedId) ?? null
      : null;
  },
};
