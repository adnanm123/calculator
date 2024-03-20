// Select elements and define variables
const display = document.getElementById('display');
let currentInput = '';
let operator = '';
let operand1 = '';
let operand2 = '';
let result = '';

// Function to update the display
function updateDisplay(value) {
  display.innerText = value;
}

// Function to perform calculation
function calculate() {
  operand1 = parseFloat(operand1);
  operand2 = parseFloat(currentInput);

  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    case '/':
      if (operand2 === 0) {
        alert("Can't divide by zero");
        return;
      }
      result = operand1 / operand2;
      break;
    default:
      return;
  }

  // Update result
  currentInput = result.toString();
  updateDisplay(currentInput);
}

// Event listeners for digits
document.querySelectorAll('.digit').forEach(button => {
  button.addEventListener('click', (e) => {
    currentInput += e.target.innerText;
    updateDisplay(currentInput);
  });
});

// Event listeners for operators
document.querySelectorAll('.op').forEach(button => {
  button.addEventListener('click', (e) => {
    if (operand1 && currentInput && operator) {
      calculate();
    } else {
      operand1 = currentInput;
    }
    operator = e.target.innerText;
    currentInput = '';
  });
});

// Event listener for equals
document.getElementById('equals').addEventListener('click', () => {
  if (operand1 && currentInput && operator) {
    calculate();
  }
});

// Event listener for clear button
document.getElementById('clear').addEventListener('click', () => {
  currentInput = '';
  operand1 = '';
  operator = '';
  result = '';
  updateDisplay('0');
});
