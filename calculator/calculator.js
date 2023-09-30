// JavaScript code (calculator.js)
let currentInput = "";
let currentOperator = "";
let result = "";

function updateDisplay() {
    document.getElementById("display").value = currentInput || result || "0";
}

function clear() {
    currentInput = "";
    currentOperator = "";
    result = "";
    updateDisplay();
}

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperator(operator) {
    if (currentInput !== "") {
        if (currentOperator !== "") {
            calculate();
        }
        currentOperator = operator;
        result = currentInput;
        currentInput = "";
        updateDisplay();
    }
}

function calculate() {
    if (currentOperator !== "") {
        currentInput = eval(`${result} ${currentOperator} ${currentInput}`);
        currentOperator = "";
        result = "";
        updateDisplay();
    }
}

// Add event listeners for button clicks
document.addEventListener("DOMContentLoaded", function () {
    updateDisplay();
    document.querySelectorAll(".buttons button").forEach(button => {
        button.addEventListener("click", function () {
            const value = this.getAttribute("data-value");
            if (value === "=") {
                calculate();
            } else if (value === "C") {
                clear();
            } else if (["+", "-", "*", "/"].includes(value)) {
                setOperator(value);
            } else {
                appendNumber(value);
            }
        });
    });
});
