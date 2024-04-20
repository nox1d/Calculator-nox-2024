function operate() {
    
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
            splitValues(values);
        } else {
            SCREEN.innerText += this.innerText;
            values += (this.value);

        }
    });
}
