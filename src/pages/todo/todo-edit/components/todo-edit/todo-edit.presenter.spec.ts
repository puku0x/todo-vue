import { ref } from 'vue';

import { Todo } from '@/models';

import { useTodoEditPresenter } from './todo-edit.presenter';

describe('useTodoEditPresenter', () => {
  it('should handle submit', async () => {
    const onUpdate = jest.fn();
    const todo = ref({
      id: '1',
      title: 'title',
      completed: false,
      createdAt: 123456789,
      updatedAt: 123456789,
    } as Todo);
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
