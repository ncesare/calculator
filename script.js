const display = document.querySelector('#display-box');

let calculation = [];

const allClear = document.querySelector('#all-clear');
allClear.addEventListener('click', () => {
    display.textContent = '0';
    calculation = [];
    });

const negativeOperator = document.querySelector('#negative-op');
const percentOperator = document.querySelector('#percent-op');
const divOperator = document.querySelector('#div-op');
const multOperator = document.querySelector('#mult-op');
const plusOperator = document.querySelector('#plus-op');
const minusOperator = document.querySelector('#minus-op');
const equalsOperator = document.querySelector('#equals-op');

negativeOperator.addEventListener('click', () => display.textContent = '-' + display.textContent);
percentOperator.addEventListener('click', () => display.textContent = parseFloat(display.textContent)/100)

const operators = [divOperator, multOperator, plusOperator, minusOperator]

for (operator of operators) {
    operator.addEventListener('click', (e) => calculation = operation(e));
}

equalsOperator.addEventListener('click', () => calculation = calculate(calculation));

const decimal = document.querySelector('#decimal');
const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');

const numbers = [zero, one, two, three, four, five, six, seven, eight, nine, decimal];

for (number of numbers) {
    number.addEventListener('click', (e) => {
        // Catch errors that would cause invalid or too-long numbers to appear
        if (e.target.value === '.' && display.textContent.includes('.'))
            return;

        if (display.textContent.length >= 11) {
            console.log('Display full');
            return;
        }

        if (display.textContent == 0) {
            display.textContent = e.target.value;
        } else {
            display.textContent = display.textContent + e.target.value;
        }
    });
}

// Bind the user's entered number and chosen operation

function operation(e) {
    if (calculation.length > 0) {
        calculate(calculation);
    }
    let num1 = Number.parseFloat(display.textContent);
    display.textContent = 0;
    console.log(num1);
    let operator = e.target.value;
    console.log(operator);
    return [num1, operator];
}

// Finish the calculation

function calculate(calculation) {
    // Catch an error where the user tries to run a calculation without entering an operator
    if (calculation.length === 0) {
        return;
    }

    let num1 = calculation[0]
    let operator = calculation[1]
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