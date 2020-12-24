import { Todo } from '@/models';

import {
  FETCH_ALL_REQUEST,
  FETCH_ALL_SUCCESS,
  FETCH_ALL_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  CREATE_REQUEST,
  CREATE_SUCCESS,
  CREATE_FAILURE,
  UPDATE_REQUEST,
  UPDATE_SUCCESS,
  UPDATE_FAILURE,
  REMOVE_REQUEST,
  REMOVE_SUCCESS,
  REMOVE_FAILURE,
} from '../actions';
import { TodoState, initialState } from '../states';
import { mutations } from './todo.mutation';

describe('mutations', () => {
  it('should handle FETCH_ALL_REQUEST', () => {
    const state: TodoState = {
      ...initialState,
    };

    mutations[FETCH_ALL_REQUEST](state);

    expect(state.isFetching).toEqual(true);
  });

  it('should handle FETCH_ALL_SUCCESS', () => {
    const state: TodoState = {
      ...initialState,
      isFetching: true,
    };
    const todos: Todo[] = [
      {
        id: '1',
        title: 'title',
        completed: false,
        createdAt: 123456789,
        updatedAt: 123456789,
      },
      {
        id: '2',
        title: 'title',
        completed: false,
        createdAt: 123456789,
        updatedAt: 123456789,
      },
      {
        id: '3',
        title: 'title',
        completed: false,
        createdAt: 123456789,
        updatedAt: 123456789,
      },
    ];

    mutations[FETCH_ALL_SUCCESS](state, todos);

    expect(state.isFetching).toEqual(false);
    expect(state.todos).toStrictEqual(todos);
  });

  it('should handle FETCH_ALL_FAILURE', () => {
    const state: TodoState = {
      ...initialState,
      isFetching: true,
    };

    mutations[FETCH_ALL_FAILURE](state);

    expect(state.isFetching).toEqual(false);
  });

  it('should handle FETCH_REQUEST', () => {
    const state: TodoState = {
      ...initialState,
    };
    const id = '1';

    mutations[FETCH_REQUEST](state, id);

    expect(state.isFetching).toEqual(true);
    expect(state.selectedId).toEqual(id);
  });

  it('should handle FETCH_SUCCESS', () => {
    const state: TodoState = {
      ...initialState,
      isFetching: true,
    };
    const todo: Todo = {
      id: '3',
      title: 'title',
      completed: false,
      createdAt: 123456789,
      updatedAt: 123456789,
    };
    const todos: Todo[] = [...state.todos, todo];

    mutations[FETCH_SUCCESS](state, todo);

    expect(state.isFetching).toEqual(false);
    expect(state.todos).toStrictEqual(todos);
  });

  it('should handle FETCH_FAILURE', () => {
    const state: TodoState = {
      ...initialState,
      isFetching: true,
    };

    mutations[FETCH_FAILURE](state);

    expect(state.isFetching).toEqual(false);
  });

  it('should handle CREATE_REQUEST', () => {
    const state: TodoState = {
      ...initialState,
    };

    mutations[CREATE_REQUEST](state);

    expect(state.isFetching).toEqual(true);
  });

  it('should handle CREATE_SUCCESS', () => {
    const state: TodoState = {
      ...initialState,
      isFetching: true,
    };
    const todo: Todo = {
      id: '1',
      title: 'title',
      completed: false,
      createdAt: 123456789,
      updatedAt: 123456789,
    };
    const todos: Todo[] = [todo];

    mutations[CREATE_SUCCESS](state, todo);

    expect(state.isFetching).toEqual(false);
    expect(state.todos).toStrictEqual(todos);
  });

  it('should handle CREATE_FAILURE', () => {
    const state: TodoState = {
      ...initialState,
      isFetching: true,
    };

    mutations[CREATE_FAILURE](state);

    expect(state.isFetching).toEqual(false);
  });

  it('should handle UPDATE_REQUEST', () => {
    const state: TodoState = {
      ...initialState,
    };

    mutations[UPDATE_REQUEST](state);

    expect(state.isFetching).toEqual(true);
  });

  it('should handle UPDATE_SUCCESS', () => {
    const state: TodoState = {
      ...initialState,
      isFetching: true,
      todos: [
        {
          id: '1',
          title: 'title',
          completed: false,
          createdAt: 123456789,
          updatedAt: 123456789,
        },
        {
          id: '2',
          title: 'title',
          completed: false,
          createdAt: 123456789,
          updatedAt: 123456789,
        },
        {
          id: '3',
          title: 'title',
          completed: false,
          createdAt: 123456789,
          updatedAt: 123456789,
        },
      ],
    };
    const todo: Todo = {
      id: '2',
      title: 'update',
      completed: false,
      createdAt: 123456789,
      updatedAt: 123456789,
    };
    const todos = state.todos.map((t) => (t.id === todo.id ? todo : t));

    mutations[UPDATE_SUCCESS](state, todo);

    expect(state.isFetching).toEqual(false);
    expect(state.todos).toStrictEqual(todos);
  });

  it('should handle UPDATE_FAILURE', () => {
    const state: TodoState = {
      ...initialState,
      isFetching: true,
    };

    mutations[UPDATE_FAILURE](state);

    expect(state.isFetching).toEqual(false);
  });

  it('should handle REMOVE_REQUEST', () => {
    const state: TodoState = {
      ...initialState,
    };

    mutations[REMOVE_REQUEST](state);

    expect(state.isFetching).toEqual(true);
  });

  it('should handle REMOVE_SUCCESS', () => {
    const state: TodoState = {
      ...initialState,
      isFetching: true,
      todos: [
        {
          id: '1',
          title: 'title',
          completed: false,
          createdAt: 123456789,
          updatedAt: 123456789,
        },
        {
          id: '2',
          title: 'title',
          completed: false,
          createdAt: 123456789,
          updatedAt: 123456789,
        },
        {
          id: '3',
          title: 'title',
          completed: false,
          createdAt: 123456789,
          updatedAt: 123456789,
        },
      ],
    };
    const id = '2';
    const todos = state.todos.filter((t) => t.id !== id);

    mutations[REMOVE_SUCCESS](state, id);

    expect(state.isFetching).toEqual(false);
    expect(state.todos).toStrictEqual(todos);
  });

  it('should handle REMOVE_FAILURE', () => {
    const state: TodoState = {
      ...initialState,
      isFetching: true,
    };

    mutations[REMOVE_FAILURE](state);

    expect(state.isFetching).toEqual(false);
  });
});
