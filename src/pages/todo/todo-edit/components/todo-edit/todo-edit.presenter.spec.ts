import { ref } from 'vue';

import { generateTodoMock } from '@/models/testing';

import { useTodoEditPresenter } from './todo-edit.presenter';

describe('useTodoEditPresenter', () => {
  it('should handle submit', async () => {
    const onUpdate = jest.fn();
    const todo = ref(generateTodoMock());
    const { isValid, values, handleSubmit } = useTodoEditPresenter({
      todo,
      onUpdate,
    });

    expect(isValid.value).toEqual(true);

    values.title = 'title';
    values.completed = true;
    handleSubmit();

    expect(isValid.value).toEqual(true);
    expect(onUpdate).toHaveBeenCalled();
  });
});
