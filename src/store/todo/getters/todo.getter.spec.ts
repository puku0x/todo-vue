import { generateTodosMock } from '@/models/testing';

import { TodoState, initialState } from '../states';
import { isFetching, selectedId, todos, todo } from './todo.getter';

describe('getters', () => {
  it('should get isFetching', () => {
    const state: TodoState = {
      ...initialState,
      isFetching: true,
    };

    expect(isFetching(state)).toEqual(true);
  });

  it('should get selectedId', () => {
    const state: TodoState = {
      ...initialState,
      selectedId: '1',
    };

    expect(selectedId(state)).toEqual('1');
  });

  it('should get todos', () => {
    const state: TodoState = {
      ...initialState,
      todos: generateTodosMock(),
    };

    expect(todos(state)).toEqual(state.todos);
  });

  it('should get todo', () => {
    const state: TodoState = {
      ...initialState,
      selectedId: '1',
      todos: generateTodosMock(),
    };

    expect(todo(state)).toEqual(state.todos[0]);
  });
});
