import { GetterTree } from 'vuex';

import { RootState } from '../../store';
import { TodoState } from '../states';

export const getters: GetterTree<TodoState, RootState> = {
  isFetching: state => state.isFetching,
  todos: state => state.todos
};
