const validator = () => {
  const input: HTMLElement = document.getElementById('input')!;
  const validateBtn: HTMLElement = document.getElementById('button')!;
  const clearBtn: HTMLElement = document.getElementById('button2')!;
  const displayMessage: HTMLElement = document.getElementById('result')!;

  validateBtn.addEventListener('click', () => {
    console.log('value', input.value);
    if (input.value) {
      if (Number.isInteger(input.value)) {
        if (
          Number(input.value) > 0 &&
          Number(input.value) < 100 &&
          Number(input.value) % 2 === 0
        ) {
          displayMessage.innerHTML = 'Valid';
        } else {
          displayMessage.innerHTML = 'Invalid';
        }
        displayMessage.innerHTML = 'Valid';
      } else {
        displayMessage.innerHTML = 'Invalid';
      }
    } else {
      displayMessage.innerHTML = 'Invalid';
    }
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    displayMessage.innerHTML = '';
  });
};

validator();
