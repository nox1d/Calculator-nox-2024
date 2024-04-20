function operate(arr) {
    let operator = arr[1];
    let num1 = parseInt(arr[0]);
    let num2 = parseInt(arr[2]);
    let result;

    if (operator == "+") result = sum(num1, num2);
    if (operator == "-") result = subtract(num1, num2);
    if (operator == "*") result = multiply(num1, num2);
    if (operator == "/") result = divide(num1, num2);

    return result;
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

function splitValues(arr) {
let values_arr = arr.join("").match(/^-?\d+|[+\-*/]|\d+/g);
    console.log(values_arr);
    return values_arr;
}

const VALID_REGEX = /^(-?\d+)[+\-x/]\d+$/;
const OPERATOR_REGEX = /[+\-x/]$/;
const SCREEN = document.getElementById("display");

let values = [];

let buttons = document.querySelectorAll("button");

for (let button of buttons) {
    button.addEventListener("click", function() {
        if (this.className == "operator" && VALID_REGEX.test(SCREEN.innerText)) {
            values = [operate(splitValues(values))];
            values.push(this.value)
            console.log(values);
            SCREEN.innerText = values[0] + this.innerText;
        } else if (this.className == "operator" && OPERATOR_REGEX.test(SCREEN.innerText)) {
            values[values.length - 1] = this.value;
            console.log(values);
            SCREEN.innerText = SCREEN.innerText.substring(0, SCREEN.innerText.length - 1) + this.innerText;
        } else {
            values.push(this.value);
            console.log(values);
            SCREEN.innerText += this.innerText;
        }
    });
}
