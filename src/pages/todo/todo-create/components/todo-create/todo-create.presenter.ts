import { computed, reactive } from 'vue';

import { TodoCreateDto } from '@/models';

export interface FormValues {
  title: string;
}

const toDto = (values: FormValues) => {
  const value: TodoCreateDto = {
    title: values.title,
  };
  return value;
};

export const useTodoCreatePresenter = (arg: {
  onCreate?: (todo: TodoCreateDto) => void;
}) => {
  const { onCreate } = arg;
  const values = reactive<FormValues>({
    title: '',
  });
  const errors = computed(() => ({
    title: values.title.length === 0 ? 'title is required' : undefined,
  }));
  const isValid = computed(
    () => Object.values(errors.value).filter((error) => !!error).length === 0
  );

  const handleSubmit = () => {
    if (isValid.value) {
      onCreate && onCreate(toDto(values));
    }
  };

  return {
    errors,
    isValid,
    values,
    handleSubmit,
  } as const;
};
