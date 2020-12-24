import { Todo, TodoCreateDto, TodoUpdateDto } from '@/models';
import { todoService } from '@/services';

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
  actions,
} from './todo.action';

describe('actions', () => {
  it('should commit FETCH_ALL_SUCCESS', async () => {
    const offset = 0;
    const limit = 10;
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

    const spy = jest
      .spyOn(todoService, 'fetchAll')
      .mockResolvedValueOnce(todos);

    const commit = jest.fn();
    const arg = { offset, limit };

    // eslint-disable-next-line @typescript-eslint/ban-types
    await (actions[FETCH_ALL_REQUEST] as Function)({ commit }, arg);

    expect(commit).toHaveBeenCalledWith(FETCH_ALL_REQUEST);
    expect(spy).toHaveBeenCalledWith(offset, limit);
    expect(commit).toHaveBeenCalledWith(FETCH_ALL_SUCCESS, todos);
  });

  it('should commit FETCH_ALL_FAILURE', async () => {
    const offset = 0;
    const limit = 10;
    const error = new Error();

    const spy = jest
      .spyOn(todoService, 'fetchAll')
      .mockRejectedValueOnce(error);

    const commit = jest.fn();
    const arg = { offset, limit };

    try {
      // eslint-disable-next-line @typescript-eslint/ban-types
      await (actions[FETCH_ALL_REQUEST] as Function)({ commit }, arg);
    } catch {
      expect(commit).toHaveBeenCalledWith(FETCH_ALL_REQUEST);
      expect(spy).toHaveBeenCalledWith(offset, limit);
      expect(commit).toHaveBeenCalledWith(FETCH_ALL_FAILURE, error);
    }
  });

  it('should commit FETCH_SUCCESS', async () => {
    const id = '1';
    const todo: Todo = {
      id: '1',
      title: 'title',
      completed: false,
      createdAt: 123456789,
      updatedAt: 123456789,
    };

    const spy = jest.spyOn(todoService, 'fetch').mockResolvedValueOnce(todo);

    const commit = jest.fn();
    const arg = { id };

    // eslint-disable-next-line @typescript-eslint/ban-types
    await (actions[FETCH_REQUEST] as Function)({ commit }, arg);

    expect(commit).toHaveBeenCalledWith(FETCH_REQUEST, id);
    expect(spy).toHaveBeenCalledWith(id);
    expect(commit).toHaveBeenCalledWith(FETCH_SUCCESS, todo);
  });

  it('should commit FETCH_FAILURE', async () => {
    const id = '1';
    const error = new Error();

    const spy = jest.spyOn(todoService, 'fetch').mockRejectedValueOnce(error);

    const commit = jest.fn();
    const arg = { id };

    try {
      // eslint-disable-next-line @typescript-eslint/ban-types
      await (actions[FETCH_REQUEST] as Function)({ commit }, arg);
    } catch {
      expect(commit).toHaveBeenCalledWith(FETCH_REQUEST, id);
      expect(spy).toHaveBeenCalledWith(id);
      expect(commit).toHaveBeenCalledWith(FETCH_FAILURE, error);
    }
  });

  it('should commit CREATE_SUCCESS', async () => {
    const dto: TodoCreateDto = {
      title: 'title',
    };
    const todo: Todo = {
      id: '1',
      title: 'title',
      completed: false,
      createdAt: 123456789,
      updatedAt: 123456789,
    };

    const spy = jest.spyOn(todoService, 'create').mockResolvedValueOnce(todo);

    const commit = jest.fn();
    const arg = { todo: dto };

    // eslint-disable-next-line @typescript-eslint/ban-types
    await (actions[CREATE_REQUEST] as Function)({ commit }, arg);

    expect(commit).toHaveBeenCalledWith(CREATE_REQUEST);
    expect(spy).toHaveBeenCalledWith(dto);
    expect(commit).toHaveBeenCalledWith(CREATE_SUCCESS, todo);
  });

  it('should commit CREATE_FAILURE', async () => {
    const dto: TodoCreateDto = {
      title: 'title',
    };
    const error = new Error();

    const spy = jest.spyOn(todoService, 'create').mockRejectedValueOnce(error);

    const commit = jest.fn();
    const arg = { todo: dto };

    try {
      // eslint-disable-next-line @typescript-eslint/ban-types
      await (actions[CREATE_REQUEST] as Function)({ commit }, arg);
    } catch {
      expect(commit).toHaveBeenCalledWith(CREATE_REQUEST);
      expect(spy).toHaveBeenCalledWith(dto);
      expect(commit).toHaveBeenCalledWith(CREATE_FAILURE, error);
    }
  });

  it('should commit UPDATE_SUCCESS', async () => {
    const id = '1';
    const dto: TodoUpdateDto = {
      id: '1',
      title: 'title',
      completed: false,
    };
    const todo: Todo = {
      id: '1',
      title: 'title',
      completed: false,
      createdAt: 123456789,
      updatedAt: 123456789,
    };

    const spy = jest.spyOn(todoService, 'update').mockResolvedValueOnce(todo);

    const commit = jest.fn();
    const arg = { id, todo: dto };

    // eslint-disable-next-line @typescript-eslint/ban-types
    await (actions[UPDATE_REQUEST] as Function)({ commit }, arg);

    expect(commit).toHaveBeenCalledWith(UPDATE_REQUEST);
    expect(spy).toHaveBeenCalledWith(id, dto);
    expect(commit).toHaveBeenCalledWith(UPDATE_SUCCESS, todo);
  });

  it('should commit UPDATE_FAILURE', async () => {
    const id = '1';
    const dto: TodoUpdateDto = {
      id: '1',
      title: 'title',
      completed: false,
    };
    const error = new Error();

    const spy = jest.spyOn(todoService, 'update').mockRejectedValueOnce(error);

    const commit = jest.fn();
    const arg = { id, todo: dto };

    try {
      // eslint-disable-next-line @typescript-eslint/ban-types
      await (actions[UPDATE_REQUEST] as Function)({ commit }, arg);
    } catch {
      expect(commit).toHaveBeenCalledWith(UPDATE_REQUEST);
      expect(spy).toHaveBeenCalledWith(id, dto);
      expect(commit).toHaveBeenCalledWith(UPDATE_FAILURE, error);
    }
  });

  it('should commit REMOVE_SUCCESS', async () => {
    const id = '1';

    const spy = jest.spyOn(todoService, 'remove').mockResolvedValueOnce(id);

    const commit = jest.fn();
    const arg = { id };

    // eslint-disable-next-line @typescript-eslint/ban-types
    await (actions[REMOVE_REQUEST] as Function)({ commit }, arg);

    expect(commit).toHaveBeenCalledWith(REMOVE_REQUEST);
    expect(spy).toHaveBeenCalledWith(id);
    expect(commit).toHaveBeenCalledWith(REMOVE_SUCCESS, id);
  });

  it('should commit REMOVE_FAILURE', async () => {
    const id = '1';
    const error = new Error();

    const spy = jest.spyOn(todoService, 'remove').mockRejectedValueOnce(error);

    const commit = jest.fn();
    const arg = { id };

    try {
      // eslint-disable-next-line @typescript-eslint/ban-types
      await (actions[REMOVE_REQUEST] as Function)({ commit }, arg);
    } catch {
      expect(commit).toHaveBeenCalledWith(REMOVE_REQUEST);
      expect(spy).toHaveBeenCalledWith(id);
      expect(commit).toHaveBeenCalledWith(REMOVE_FAILURE, error);
    }
  });
});
