const validator = () => {
  const numberInput = document.getElementById('input');
  const validateBtn = document.getElementById('button');
  const clearBtn = document.getElementById('button2');
  const displayMessage = document.getElementById('result');

  validateBtn.addEventListener('click', () => {
    console.log('value', numberInput.value);
    if (numberInput.value) {
      if (Number.isInteger(numberInput.value)) {
        if (
          Number(numberInput.value) > 0 &&
          Number(numberInput.value) < 100 &&
          Number(numberInput.value) % 2 === 0
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
    numberInput.value = '';
    displayMessage.innerHTML = '';
  });
};

validator();
