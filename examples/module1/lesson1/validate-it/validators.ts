import {
  MESSAGE_ERROR_INVALID_INT,
  MESSAGE_ERROR_INVALID_INPUT,
  MESSAGE_ERROR_INVALID_NUMBER,
  SUCCESS_MESSAGE_VALID_INT,
} from './meessages';
import { NumericValidationMethod, isValidInteger } from './methods';

export const validate = (
  input: string,
  validators: NumericValidationMethod[]
): string => {
  if (input === '') {
    return MESSAGE_ERROR_INVALID_INPUT;
  }

  if (Number(input) > 100 || Number(input) < 0) {
    return MESSAGE_ERROR_INVALID_NUMBER;
  }

  if (!isValidInteger(input)) {
    return MESSAGE_ERROR_INVALID_INPUT;
  }

  const isValidRangeInteger = validators.every((validateFn) =>
    validateFn(Number(input))
  );

  if (!isValidRangeInteger) {
    return MESSAGE_ERROR_INVALID_INT;
  }

  return SUCCESS_MESSAGE_VALID_INT;
};
