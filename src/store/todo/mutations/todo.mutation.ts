import { MutationTree } from 'vuex';

import { Todo } from '@/models';

import {
  FETCH_ALL_REQUEST,
  FETCH_ALL_SUCCESS,
  FETCH_ALL_FAILURE,
  CREATE_REQUEST,
  CREATE_SUCCESS,
  CREATE_FAILURE
} from '../actions';
import { TodoState } from '../states';

export const mutations: MutationTree<TodoState> = {
  [FETCH_ALL_REQUEST]: state => {
    state.isFetching = true;
  },
  [FETCH_ALL_SUCCESS]: (state, todos: Todo[]) => {
    state.isFetching = false;
    state.todos = todos;
  },
  [FETCH_ALL_FAILURE]: state => {
    state.isFetching = false;
  },
  [CREATE_REQUEST]: state => {
    state.isFetching = true;
  },
  [CREATE_SUCCESS]: (state, todo: Todo) => {
    state.isFetching = false;
    state.todos.push(todo);
  },
  [CREATE_FAILURE]: state => {
    state.isFetching = false;
  }
};
