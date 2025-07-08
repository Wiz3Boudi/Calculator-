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
  previousValue = Number(currentValue);
    operation = op;
    currentValue='';
    updateDisplay();
}
function addDecimal(decimal) { 
  if(!currentValue.includes('.') ){
    currentValue += decimal;
  }else {return}
  updateDisplay()
}


function calculate() {
  // if(previousValue !='0' || previousValue === '0' || previousValue != 0 && operation != null || operation === null){
  //   currentValue = previousValue

  // };
  if(currentValue === '' || operation === null || previousValue ==='') return;
  let currentValueToNum = Number(currentValue);
  let result;
  if (currentValue != "" && operation != "" && previousValue != "") {
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
  }
  currentValue = result.toString();
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
function Delete(){
  if(currentValue !=''){
    currentValue.slice(0, -1)
  }
}

function updateDisplay() {
  document.getElementById("currentValue").value = currentValue;
  document.getElementById('previousValue').value = previousValue;
}