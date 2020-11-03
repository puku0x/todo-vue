import { GetterTree } from 'vuex';

import { RootState } from '../../store';
import { TodoState } from '../states';

export const getters: GetterTree<TodoState, RootState> = {
  todos: state => state.todos
};
