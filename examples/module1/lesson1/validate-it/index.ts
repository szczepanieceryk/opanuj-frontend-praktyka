import { NUMBER_VALIDATORS } from './methods';
import { validate } from './validators';

const validator = () => {
  const input: HTMLInputElement = document.getElementById('input')!;
  const validateBtn: HTMLElement = document.getElementById('button')!;
  const clearBtn: HTMLElement = document.getElementById('button2')!;
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
