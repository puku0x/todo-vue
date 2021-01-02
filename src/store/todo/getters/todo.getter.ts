import { GetterTree } from 'vuex';

import { RootState } from '../../store';
import { TodoState } from '../states';

export const isFetching = (state: TodoState) => state.isFetching;
export const selectedId = (state: TodoState) => state.selectedId;
export const todos = (state: TodoState) => state.todos;
export const todo = (state: TodoState) => {
  return state.selectedId
    ? state.todos.find((todo) => todo.id === state.selectedId) ?? null
    : null;
};

export const getters: GetterTree<TodoState, RootState> = {
  isFetching,
  selectedId,
  todos,
  todo,
};
