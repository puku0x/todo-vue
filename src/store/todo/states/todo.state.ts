import { Todo } from '../../../models';

export const featureKey = 'todos';

export interface TodoState {
  todos: Todo[];
}

export const initialState: TodoState = {
  todos: []
};
