import {
  generateTodoCreateDtoMock,
  generateTodoMock,
  generateTodosMock,
  generateTodoUpdateDtoMock,
} from '@/models/testing';
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

type AsyncFunction<T = void> = (...args: unknown[]) => Promise<T>;

describe('actions', () => {
  it('should commit FETCH_ALL_SUCCESS', async () => {
    const offset = 0;
    const limit = 10;
    const todos = generateTodosMock();

    const spy = jest
      .spyOn(todoService, 'fetchAll')
      .mockResolvedValueOnce(todos);

    const commit = jest.fn();
    const arg = { offset, limit };

    await (actions[FETCH_ALL_REQUEST] as AsyncFunction)({ commit }, arg);

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
      await (actions[FETCH_ALL_REQUEST] as AsyncFunction)({ commit }, arg);
    } catch {
      expect(commit).toHaveBeenCalledWith(FETCH_ALL_REQUEST);
      expect(spy).toHaveBeenCalledWith(offset, limit);
      expect(commit).toHaveBeenCalledWith(FETCH_ALL_FAILURE, error);
    }
  });

  it('should commit FETCH_SUCCESS', async () => {
    const id = '1';
    const todo = generateTodoMock();

    const spy = jest.spyOn(todoService, 'fetch').mockResolvedValueOnce(todo);

    const commit = jest.fn();
    const arg = { id };

    await (actions[FETCH_REQUEST] as AsyncFunction)({ commit }, arg);

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
      await (actions[FETCH_REQUEST] as AsyncFunction)({ commit }, arg);
    } catch {
      expect(commit).toHaveBeenCalledWith(FETCH_REQUEST, id);
      expect(spy).toHaveBeenCalledWith(id);
      expect(commit).toHaveBeenCalledWith(FETCH_FAILURE, error);
    }
  });

  it('should commit CREATE_SUCCESS', async () => {
    const dto = generateTodoCreateDtoMock();
    const todo = generateTodoMock();

    const spy = jest.spyOn(todoService, 'create').mockResolvedValueOnce(todo);

    const commit = jest.fn();
    const arg = { todo: dto };

    await (actions[CREATE_REQUEST] as AsyncFunction)({ commit }, arg);

    expect(commit).toHaveBeenCalledWith(CREATE_REQUEST);
    expect(spy).toHaveBeenCalledWith(dto);
    expect(commit).toHaveBeenCalledWith(CREATE_SUCCESS, todo);
  });

  it('should commit CREATE_FAILURE', async () => {
    const dto = generateTodoCreateDtoMock();
    const error = new Error();

    const spy = jest.spyOn(todoService, 'create').mockRejectedValueOnce(error);

    const commit = jest.fn();
    const arg = { todo: dto };

    try {
      await (actions[CREATE_REQUEST] as AsyncFunction)({ commit }, arg);
    } catch {
      expect(commit).toHaveBeenCalledWith(CREATE_REQUEST);
      expect(spy).toHaveBeenCalledWith(dto);
      expect(commit).toHaveBeenCalledWith(CREATE_FAILURE, error);
    }
  });

  it('should commit UPDATE_SUCCESS', async () => {
    const id = '1';
    const dto = generateTodoUpdateDtoMock();
    const todo = generateTodoMock();

    const spy = jest.spyOn(todoService, 'update').mockResolvedValueOnce(todo);

    const commit = jest.fn();
    const arg = { id, todo: dto };

    await (actions[UPDATE_REQUEST] as AsyncFunction)({ commit }, arg);

    expect(commit).toHaveBeenCalledWith(UPDATE_REQUEST);
    expect(spy).toHaveBeenCalledWith(id, dto);
    expect(commit).toHaveBeenCalledWith(UPDATE_SUCCESS, todo);
  });

  it('should commit UPDATE_FAILURE', async () => {
    const id = '1';
    const dto = generateTodoUpdateDtoMock();
    const error = new Error();

    const spy = jest.spyOn(todoService, 'update').mockRejectedValueOnce(error);

    const commit = jest.fn();
    const arg = { id, todo: dto };

    try {
      await (actions[UPDATE_REQUEST] as AsyncFunction)({ commit }, arg);
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

    await (actions[REMOVE_REQUEST] as AsyncFunction)({ commit }, arg);

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
      await (actions[REMOVE_REQUEST] as AsyncFunction)({ commit }, arg);
    } catch {
      expect(commit).toHaveBeenCalledWith(REMOVE_REQUEST);
      expect(spy).toHaveBeenCalledWith(id);
      expect(commit).toHaveBeenCalledWith(REMOVE_FAILURE, error);
    }
  });
});
