import { Todo } from '../../../models';

export interface TodoState {
  todos: Todo[];
}

export const initialState: TodoState = {
  todos: []
};
