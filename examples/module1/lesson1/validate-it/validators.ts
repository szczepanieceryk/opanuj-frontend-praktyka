import {
  MESSAGE_ERROR_INVALID_INT,
  MESSAGE_ERROR_INVALID_INPUT,
  SUCCESS_MESSAGE_VALID_INT,
} from './meessages';
import { NumericValidationMethod, isValidInteger } from './methods';

export const validate = (
  input: string,
  validators: NumericValidationMethod[]
): string => {
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
