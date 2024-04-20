function operate() {
    
}

const VALID_REGEX = /^\d+[+\-*/]\d+$/;

const SCREEN = document.getElementById("display");
let values = "";

let buttons = document.querySelectorAll("button");

for (let button of buttons) {
    button.addEventListener("click", function() {
        SCREEN.innerText += this.innerText;
        values += (this.innerText);
        console.log(values);
        console.log(VALID_REGEX.test(values));
    });
}
