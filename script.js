function operate(arr) {
    let operator = arr[1];
    let num1 = parseInt(arr[0]);
    let num2 = parseInt(arr[2]);
    let result;

    if (operator == "+") result = sum(num1, num2);
    if (operator == "-") result = subtract(num1, num2);
    if (operator == "*") result = multiply(num1, num2);
    if (operator == "/") result = divide(num1, num2);

    console.log(result);
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

function splitValues(values) {
    let values_arr = values.split(/\b/);
    console.log(values_arr);
    return values_arr;
}

const VALID_REGEX = /^\d+[+\-*/]\d+$/;
const SCREEN = document.getElementById("display");
let values = "";

let buttons = document.querySelectorAll("button");

for (let button of buttons) {
    button.addEventListener("click", function() {
        if (this.className == "operator" && VALID_REGEX.test(values)) {
            operate(splitValues(values));
        } else {
            SCREEN.innerText += this.innerText;
            values += (this.value);

        }
    });
}
