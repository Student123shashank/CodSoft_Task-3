const buttons = document.querySelectorAll('button');
const inputBox = document.getElementById('inputBox');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    switch (value) {
      case 'AC':
        inputBox.value = '0';
        break;
      case 'DEL':
        inputBox.value = inputBox.value.slice(0, -1);
        break;
      case '=':
        try {
          const result = eval(inputBox.value);
          inputBox.value = isNaN(result) ? 'Error' : result;
        } catch (error) {
          inputBox.value = 'Error';
        }
        break;
      default:
        if (inputBox.value === '0') {
          inputBox.value = value;
        } else {
          inputBox.value += value;
        }
        break;
    }
  });
});