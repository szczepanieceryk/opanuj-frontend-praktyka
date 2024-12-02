export type NumericValidationMethod = (input: number) => boolean;

const isEven: NumericValidationMethod = (input: number) => input % 2 === 0;

const isGratherThan = (boundry: number): NumericValidationMethod => {
  return (input: number) => input > boundry;
};

const isLessThan = (boundry: number): NumericValidationMethod => {
  return (input: number) => input < boundry;
};

export const NUMBER_VALIDATORS: NumericValidationMethod[] = [
  isEven,
  isGratherThan(0),
  isLessThan(100),
];
