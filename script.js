const display = document.querySelector('#display-box');

let expression = [];

let clearSlate = true;

const allClear = document.querySelector('#all-clear');
allClear.addEventListener('click', () => {
    display.textContent = '0';
    expression = [];
    });

const negativeOperator = document.querySelector('#negative-op');
const percentOperator = document.querySelector('#percent-op');
const divOperator = document.querySelector('#div-op');
const multOperator = document.querySelector('#mult-op');
const plusOperator = document.querySelector('#plus-op');
const minusOperator = document.querySelector('#minus-op');
const equalsOperator = document.querySelector('#equals-op');

negativeOperator.addEventListener('click', () => {
    if (display.textContent.includes('-')) {
        display.textContent = Math.abs(Number(display.textContent));
    } else {
        display.textContent = '-' + display.textContent;
    }})

percentOperator.addEventListener('click', () => display.textContent = parseFloat(display.textContent)/100)

const operators = [divOperator, multOperator, plusOperator, minusOperator]

for (operator of operators) {
    operator.addEventListener('click', (e) => expression = operation(e));
}

equalsOperator.addEventListener('click', () => expression = calculate(expression));

const numbers = document.querySelectorAll('.number');

numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        // Catch errors that would cause invalid or too-long numbers to appear
        if (e.target.value === '.' && display.textContent.includes('.'))
            return;

        if (display.textContent.length >= 11) {
            console.log('Display full');
            return;
        }

        if (display.textContent != 0 && expression.length == 0) {
            clearSlate = false;
        }

        if (clearSlate) {
            display.textContent = e.target.value;
        } else {
            display.textContent = display.textContent + e.target.value;
        }
    });
})

// Bind the user's entered number and chosen operation

function operation(e) {
    if (expression.length > 0) {
        calculate(expression);
        clearSlate = true;
    }
    let num1 = Number.parseFloat(display.textContent);
    if (expression.length < 1) {
        display.textContent = 0;
    }
    console.log(num1);
    let operator = e.target.value;
    console.log(operator);
    return [num1, operator];
}

// Finish the calculation

function calculate(expression) {
    // Catch an error where the user tries to run a calculation without entering an operator
    if (expression.length === 0) {
        return;
    }

    let num1 = expression[0]
    let operator = expression[1]
    let num2 = Number.parseFloat(display.textContent)
    let result;
    console.log(num1, operator, num2)
    if (operator === "+") {
        result = (num1 + num2).toPrecision(10);
    }
    else if (operator === "-") {
        result = (num1 - num2).toPrecision(10);
    }
    else if (operator === "*") {
        result = (num1 * num2).toPrecision(10);
    }
    else if (operator === "/") {
        result = (num1 / num2).toPrecision(10);
    }

    // Display the result with unecessary zeros chopped off.
    display.textContent = parseFloat(result);

    // Return an empty set of numbers and operators so pressing = again won't repeat calculation
    return [];
}