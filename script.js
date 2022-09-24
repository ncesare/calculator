const displayBox = document.querySelector('#display-box');
const expressionDisplay = document.querySelector('#expression-display');

let clearSlate = true;

let expression = [];
let operator;

const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', () => {
    if (!isNaN(button.value)) appendNumber(button.value);
    else operationSwitch(button.value);
}))

function appendNumber(digit) { //Appends a number to the display
    if (clearSlate) {
        displayBox.value = digit;
        clearSlate = false;
    } else displayBox.value += digit;
}

function operationSwitch(value) {
    switch(value) {
        case 'clear':
            expressionDisplay.textContent = '';
            displayBox.value = 0;
            expression = [];
            operator = null;
            clearSlate = true;
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            if (operator) {
                expression[1] = Number(displayBox.value);
                evaluateExpression();
                operator = value;
            } else {
                expressionDisplay.textContent += `${displayBox.value} ${value} `;
                expression.push(Number(displayBox.value));
                operator = value;
                clearSlate = true;
            }
            break;
        case '+/-':
            if (displayBox.value.includes('-')) displayBox.value = Math.abs(displayBox.value);
            else displayBox.value = '-' + displayBox.value;
            break;
        case '%':
            displayBox.value = Number(displayBox.value) / 100;
            break;
        case '.':
            (!displayBox.value.includes('.')) ? displayBox.value += '.': null;
            break;
        case '=':
            if (expression.length == 1) expression.push(Number(displayBox.value));
            else expression[1] = Number(displayBox.value);
            evaluateExpression();
            break;
    }
}

function evaluateExpression() {
    expressionDisplay.textContent += `${displayBox.value} = `
    switch(operator) {
        case '+':
            displayBox.value = expression[0] + expression[1];
            break;
        case '-':
            displayBox.value = expression[0] - expression[1];
            break;
        case '*':
            displayBox.value = expression[0] * expression[1];
            break;
        case '/':
            displayBox.value = expression[0] / expression[1];
            break;
    }
    expression[0] = Number(displayBox.value);
    clearSlate = true;
}