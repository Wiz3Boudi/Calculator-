let currentValue = "";
let operation = null;
let previousValue = "";

function appendNumber(number) {
  if (currentValue === "") {
    currentValue = number.toString();
  } else {
    currentValue += number.toString();
  }
  updateDisplay();
}

function handleOperation(op) {
  // if(!operation === null)
  if (previousValue && currentValue && operation != null) {
    calculate();
  }
  if (currentValue === '') { return }
  else {
    previousValue = Number(currentValue);
    updateDisplay()
  }
  if (operation != null) {
    operation = op;
    updateDisplay();
  }
  operation = op;
  currentValue = '';
  updateDisplay();
}
function addDecimal(decimal) {
  if (!currentValue.includes('.')) {
    currentValue += decimal;
  } else { return }
  updateDisplay()
}


function calculate() {
  if (currentValue === '' && previousValue != '') {
    currentValue = previousValue;
    operation = null;
    previousValue = '';
    updateDisplay();
  }
  let currentValueToNum = Number(currentValue);
  let result;
  if (currentValue != "" && operation != null && previousValue != "") {
    switch (operation) {
      case "+":
        result = previousValue + currentValueToNum;
        break;
      case "-":
        result = previousValue - currentValueToNum;
        break;
      case "×":
        result = previousValue * currentValueToNum;
        break;
      case "÷":
        result = previousValue / currentValueToNum;
        break;
      default:
        return;
    }
  } else { return }
  currentValue = result;
  previousValue = '';
  operation = null;
  updateDisplay()
}
function clearAll() {
  currentValue = "";
  operation = null;
  previousValue = null;
  updateDisplay();
}
function Delete() {
  if (previousValue && operation != null && currentValue === '') {
    previousValue = '';
    operation = null;
    updateDisplay();
  };
  currentValue = '';
  updateDisplay();
}
function updateDisplay() {
  document.getElementById("currentValue").value = currentValue;
  document.getElementById('previousValue').value = previousValue;
}
