import { NUMBER_VALIDATORS } from './methods';
import { validate } from './validators';

const validator = () => {
  const input: HTMLInputElement = document.getElementById('input')!;
  const validateBtn: HTMLElement = document.getElementById('validation-btn')!;
  const clearBtn: HTMLElement = document.getElementById('cleanup-btn')!;
  const displayMessage: HTMLElement = document.getElementById('result')!;

  validateBtn.addEventListener('click', () => {
    const validationMessage = validate(input.value, NUMBER_VALIDATORS);
    displayMessage.innerText = validationMessage;
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    displayMessage.innerHTML = '';
  });
};

validator();
