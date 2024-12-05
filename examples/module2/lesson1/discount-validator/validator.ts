import { isNumber } from 'es-toolkit/compat';

export function formValidator(
  firstName: string,
  lastName: string,
  age: number
) {
  const errors: string[] = [];

  if (!firstName) {
    errors.push('First name is required');
  }

  if (firstName.length === 0) {
    errors.push('First name must have at least one character');
  }

  if (!lastName) {
    errors.push('Last name is required');
  }

  if (lastName.length === 0) {
    errors.push('Last name must have at least one character');
  }

  if (age < 0) {
    errors.push('Age must be a positive number');
  }

  if (!isNumber(age)) {
    throw new Error('Age must be a number');
  }

  return errors;
}
