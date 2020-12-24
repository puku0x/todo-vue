import { Ref, computed, reactive, unref, watchEffect } from 'vue';

import { Todo, TodoUpdateDto } from '@/models';

export interface FormValues {
  title: string;
  completed: boolean;
}

const toDto = (todo: Todo, values: FormValues) => {
  const value: TodoUpdateDto = {
    id: todo.id,
    title: values.title,
    completed: values.completed,
  };
  return value;
};

export const useTodoEditPresenter = (arg: {
  todo: Ref<Todo | null>;
  onUpdate?: (id: string, todo: TodoUpdateDto) => void;
}) => {
  const { onUpdate } = arg;
  const values = reactive<FormValues>({
    title: '',
    completed: false,
  });
  const errors = computed(() => ({
    title: values.title.length === 0 ? 'title is required' : undefined,
  }));
  const isValid = computed(
    () => Object.values(errors.value).filter((error) => !!error).length === 0
  );

  const handleSubmit = () => {
    const todo = unref(arg.todo);
    if (isValid.value && todo) {
      onUpdate && onUpdate(todo.id, toDto(todo, values));
    }
  };

  watchEffect(() => {
    const todo = unref(arg.todo);
    values.title = todo?.title ?? '';
    values.completed = todo?.completed ?? false;
  });

  return {
    errors,
    isValid,
    values,
    handleSubmit,
  } as const;
};
