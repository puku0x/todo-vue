import { MutationTree } from 'vuex';

import { Todo } from '../../../models';
import { FETCH_ALL_SUCCESS } from '../actions';
import { TodoState } from '../states';

export const mutations: MutationTree<TodoState> = {
  [FETCH_ALL_SUCCESS]: (state, todos: Todo[]) => {
    state.todos = todos;
  }
};
