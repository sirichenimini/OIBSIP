let expression = '';

function appendNumber(number) {
  expression += number;
  updateDisplay();
}

function appendOperator(operator) {
  expression += operator;
  updateDisplay();
}

function clearDisplay() {
  expression = '';
  updateDisplay();
}

function calculateResult() {
  try {
    const result = eval(expression);
    expression = result.toString();
    updateDisplay();
  } catch (error) {
    expression = 'Error';
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById('display').value = expression;
}