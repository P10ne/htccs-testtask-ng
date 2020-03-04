export const validationMessage = {
  required: 'Обязательное поле',
  minLength: (maxLength: number) => `Поле не должно содержать менее ${maxLength} символов`,
  isExist: (controlName: string) => `${controlName} уже существует`,
  custom: (message) => message
};
