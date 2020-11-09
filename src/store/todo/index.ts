import { Module } from 'vuex';

import { RootState } from '../store';
import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';
import { TodoState, initialState } from './states';

export const module: Module<TodoState, RootState> = {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
};

export * from './actions';
export * from './getters';
export * from './mutations';
export * from './states';
