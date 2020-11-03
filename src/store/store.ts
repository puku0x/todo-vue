import { createStore } from 'vuex';

import { todoStore } from './todo';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RootState {}

export const store = createStore<RootState>({
  modules: {
    todo: todoStore
  }
});

export type Store = typeof store;
