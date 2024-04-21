// FUNCTIONS

function operate(arr) {
    let operator = arr[1];
    let num1 = parseFloat(arr[0]);
    let num2 = parseFloat(arr[2]);
    let result;

    if (operator == "+") result = sum(num1, num2);
    if (operator == "-") result = subtract(num1, num2);
    if (operator == "*") result = multiply(num1, num2);
    if (operator == "/") result = divide(num1, num2);

    return result;
}

function splitValues(arr) {
    let values_arr = arr.join("").replace(/^[*/]\d+/, 0).match(/^[+-]?(\d+([.]\d*)?|[.]\d+)|[+\-*/]|(\d+([.]\d*)?|[.]\d+)/g);
    console.log(values_arr);
    return values_arr;
}

function sum(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

function getResult() {
    if (OPERATOR_REGEX.test(SCREEN.innerText)) {
        values.push(values[0]);
        values = [operate(splitValues(values))];
        SCREEN.innerText = values[0];
    } else if (VALID_REGEX.test(SCREEN.innerText)) {
        values = [operate(splitValues(values))];
        SCREEN.innerText = values[0];
    }
}

function continueOperation(button) { // make `2 + 3` into `6 [operator]` when you press another operator
    values = [operate(splitValues(values))];
    values.push(button.value);
    console.log(values);
    SCREEN.innerText = values[0] + button.innerText; 
}

function replaceOperator(button) {
    values[values.length - 1] = button.value;
    console.log(values);
    SCREEN.innerText = SCREEN.innerText.substring(0, SCREEN.innerText.length - 1) + button.innerText;
}

// INSTANCES

const VALID_REGEX = /^[+\-x/]?(\d+([.]\d*)?|[.]\d+)[+\-x/](\d+([.]\d*)?|[.]\d+)$/;
const OPERATOR_REGEX = /[+\-x/]$/;
const SCREEN = document.getElementById("display");

let values = [];

let buttons = document.querySelectorAll("button");

for (let button of buttons) {
    button.addEventListener("click", function() {
        if (this.className == "equal") {
            getResult();
        } else if (this.className == "operator" && VALID_REGEX.test(SCREEN.innerText)) {
            continueOperation(this);
        } else if (this.className == "operator" && OPERATOR_REGEX.test(SCREEN.innerText)) {
            replaceOperator(this);
        } else {
            values.push(this.value);
            console.log(values);
            SCREEN.innerText += this.innerText;
        }
        
    });
}
