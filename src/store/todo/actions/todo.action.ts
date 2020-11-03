import { ActionTree } from 'vuex';

import { todoService } from '../../../services';
import { RootState } from '../../store';
import { TodoState } from '../states';

export const FETCH_ALL_REQUEST = '[Todo] FETCH_ALL_REQUEST';
export const FETCH_ALL_SUCCESS = '[Todo] FETCH_ALL_SUCCESS';
export const FETCH_ALL_FAILURE = '[Todo] FETCH_ALL_FAILURE';

export const actions: ActionTree<TodoState, RootState> = {
  [FETCH_ALL_REQUEST]: async (
    { commit },
    arg: { offset?: number; limit?: number }
  ) => {
    try {
      const { offset, limit } = arg;
      const result = await todoService.fetchAll(offset, limit);
      commit(FETCH_ALL_SUCCESS, result);
    } catch (error) {
      commit(FETCH_ALL_FAILURE, error);
    }
  }
};
