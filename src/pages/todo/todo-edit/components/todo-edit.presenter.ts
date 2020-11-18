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
    completed: values.completed
  };
  return value;
};

export const useTodoEditPresenter = (arg: {
  todo: Ref<Todo | null>;
  onUpdate?: (id: string, todo: TodoUpdateDto) => void;
}) => {
  const { todo, onUpdate } = arg;
  const values = reactive<FormValues>({
    title: todo.value?.title ?? '',
    completed: todo.value?.completed ?? false
  });
  const errors = computed(() => ({
    title: values.title.length === 0 ? 'title is required' : undefined
  }));
  const isValid = computed(
    () => Object.values(errors.value).filter(error => !!error).length === 0
  );

  const handleSubmit = () => {
    const t = unref(todo);
    if (t && isValid.value) {
      onUpdate && onUpdate(t.id, toDto(t, values));
    }
  };

  watchEffect(() => {
    values.title = todo?.value?.title ?? '';
    values.completed = todo?.value?.completed ?? false;
  });

  return {
    errors,
    isValid,
    values,
    handleSubmit
  } as const;
};
