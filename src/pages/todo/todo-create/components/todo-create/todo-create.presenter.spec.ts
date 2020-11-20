import { useTodoCreatePresenter } from './todo-create.presenter';

describe('useTodoCreatePresenter', () => {
  it('should handle submit', async () => {
    const onCreate = jest.fn();
    const { isValid, values, handleSubmit } = useTodoCreatePresenter({
      onCreate
    });

    expect(isValid.value).toEqual(false);

    values.title = 'title';
    handleSubmit();

    expect(isValid.value).toEqual(true);
    expect(onCreate).toHaveBeenCalled();
  });
});
