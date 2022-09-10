const display = document.querySelector('#display-box');

const allClear = document.querySelector('#all-clear');

const negativeOperator = document.querySelector('#negative-op');
const percentOperator = document.querySelector('#percentOperator');
const divOperator = document.querySelector('#div-op');
const multOperator = document.querySelector('#mult-op');
const plusOperator = document.querySelector('#plus-op');
const minusOperator = document.querySelector('#minus-op');
const equalsOperator = document.querySelector('#equals-op');
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

const numbers = [zero, one, two, three, four, five, six, seven, eight, nine];

for (number of numbers) {
    number.addEventListener('click', (e) => display.textContent = e.target.value + display.textContent)
}