import { Module } from 'vuex';
// import { Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex';

import { RootState } from '../store';
import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';
import { TodoState, initialState } from './states';

export const todoStore: Module<TodoState, RootState> = {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
};

export { useTodoStore } from './facades';
