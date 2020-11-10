import { ActionTree } from 'vuex';

import { TodoCreateDto } from '../../../models';
import { todoService } from '../../../services';
import { RootState } from '../../store';
import { TodoState } from '../states';

export const FETCH_ALL_REQUEST = '[Todo] FETCH_ALL_REQUEST';
export const FETCH_ALL_SUCCESS = '[Todo] FETCH_ALL_SUCCESS';
export const FETCH_ALL_FAILURE = '[Todo] FETCH_ALL_FAILURE';
export const CREATE_REQUEST = '[Todo] CREATE_REQUEST';
export const CREATE_SUCCESS = '[Todo] CREATE_SUCCESS';
export const CREATE_FAILURE = '[Todo] CREATE_FAILURE';

export const actions: ActionTree<TodoState, RootState> = {
  [FETCH_ALL_REQUEST]: async (
    { commit },
    arg: { offset?: number; limit?: number }
  ) => {
    try {
      const { offset, limit } = arg;
      const result = await todoService.fetchAll(offset, limit);
      commit(FETCH_ALL_SUCCESS, result);
      return { todos: result };
    } catch (error) {
      commit(FETCH_ALL_FAILURE, error);
      throw error;
    }
  },
  [CREATE_REQUEST]: async ({ commit }, arg: { todo: TodoCreateDto }) => {
    try {
      const { todo } = arg;
      const result = await todoService.create(todo);
      commit(CREATE_SUCCESS, result);
      return { todo: result };
    } catch (error) {
      commit(CREATE_FAILURE, error);
      throw error;
    }
  }
};
