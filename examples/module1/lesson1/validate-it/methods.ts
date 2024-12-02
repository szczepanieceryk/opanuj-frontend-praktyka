export type NumericValidationMethod = (input: number) => boolean;
export type StringValidationMethod = (input: string) => boolean;

const isEven: NumericValidationMethod = (input: number) => input % 2 === 0;

const isGratherThan = (boundry: number): NumericValidationMethod => {
  return (input: number) => input > boundry;
};

const isLessThan = (boundry: number): NumericValidationMethod => {
  return (input: number) => input < boundry;
};

export const isValidInteger: StringValidationMethod = (
  value: string
): boolean => {
  return value != '' && Number.isInteger(value);
};

export const NUMBER_VALIDATORS: NumericValidationMethod[] = [
  isEven,
  isGratherThan(0),
  isLessThan(100),
];
