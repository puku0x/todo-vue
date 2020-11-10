import { Todo } from '../../../models';

export const featureKey = 'todos';

export interface TodoState {
  isFetching: boolean;
  todos: Todo[];
}

export const initialState: TodoState = {
  isFetching: false,
  todos: []
};
