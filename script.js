const display = document.querySelector('#display-box');

const allClear = document.querySelector('#all-clear');
allClear.addEventListener('click', () => display.textContent = '');

const negativeOperator = document.querySelector('#negative-op');
const percentOperator = document.querySelector('#percent-op');
const divOperator = document.querySelector('#div-op');
const multOperator = document.querySelector('#mult-op');
const plusOperator = document.querySelector('#plus-op');
const minusOperator = document.querySelector('#minus-op');
const equalsOperator = document.querySelector('#equals-op');

const operators = [negativeOperator, percentOperator, divOperator, multOperator, plusOperator, minusOperator]

let calculation;

for (operator of operators) {
    operator.addEventListener('click', (e) => calculation = operation(e));
}

equalsOperator.addEventListener('click', () => calculate(calculation));

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
    number.addEventListener('click', (e) => display.textContent = display.textContent + e.target.value);
}

function operation(e) {
    let num1 = Number.parseFloat(display.textContent);
    display.textContent = '';
    console.log(num1);
    let operator = e.target.value;
    console.log(operator);
    return [num1, operator]
}

function calculate(calculation) {
    let num1 = calculation[0]
    let operator = calculation[1]
    let num2 = Number.parseFloat(display.textContent)
    console.log(num1, operator, num2)
    if (operator === "+") {
        display.textContent = num1 + num2;
    }
    else if (operator === "-") {
        display.textContent = num1 - num2;
    }
    else if (operator === "*") {
        display.textContent = num1 * num2;
    }
    else if (operator === "/") {
        display.textContent = num1 / num2;
    }
    
}

// Still needs functionality: pressing an operator twice in a row (e.g. 2 + 2 + ...) performs the operation and stores that value as num1.
// Still needs % and +/1 operations.