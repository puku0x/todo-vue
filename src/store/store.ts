import { createStore } from 'vuex';

import * as todo from './todo';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RootState {}

export const store = createStore<RootState>({
  modules: {
    [todo.featureKey]: todo.module
  }
});

export type Store = typeof store;
