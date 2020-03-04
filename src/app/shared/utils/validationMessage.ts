export const validationMessage = {
  required: 'Обязательное поле',
  isExist: (controlName: string) => `${controlName} уже существует`,
  custom: (message) => message
};
