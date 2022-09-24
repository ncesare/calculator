const displayBox = document.querySelector('#display-box')

let clearSlate = true;

let expression = [];

const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', () => {
    if (!isNaN(button.value)) appendNumber(button.value);
    else operationSwitch(button.value);
}))

function appendNumber(digit) { //Appends a number to the display
    if (clearSlate) {
        displayBox.textContent = digit;
        clearSlate = false;
    } else displayBox.textContent += digit;
}

function operationSwitch(value) {
    switch(value) {
        case 'clear':
            displayBox.textContent = 0;
            clearSlate = true;
            expression = [];
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            expression.push(Number(displayBox.textContent), value);
            console.log(expression);
            clearSlate = true;
            break;
        case 'negative':
            if (displayBox.textContent.includes('-')) displayBox.textContent = Math.abs(displayBox.textContent);
            else displayBox.textContent = '-' + displayBox.textContent;
            break;
        case '%':
            displayBox.textContent = Number(displayBox.textContent) / 100;
            break;
        case '.':
            (!displayBox.textContent.includes('.')) ? displayBox.textContent += '.': null;
            break;
        case '=':
            evaluateExpression();
            break;
    }
}

function evaluateExpression() {
    expression.push(Number(displayBox.textContent));
    switch(expression[1]) {
        case '+':
            displayBox.textContent = expression[0] + expression[2];
    }
}