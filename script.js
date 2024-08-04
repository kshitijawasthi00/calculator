const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

let currentNumber = '';
let previousNumber = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            currentNumber = '';
            previousNumber = ''
            operator = '';
            display.value = '';
        } else if (value === '=') {
            calculate();
        } else if (value === '<') {
            currentNumber = currentNumber.slice(0, -1);
            display.value = currentNumber;
        } else if (['+', '-', '*', '/'].includes(value)) {
            operator = value;
            previousNumber = currentNumber;
            currentNumber = '';
        } else {
            currentNumber += value;
            display.value = currentNumber;
        }
    });
});

function calculate() {
    let result;

    switch (operator) {
        case '+':
            result = parseFloat(previousNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(previousNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(previousNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(previousNumber) / parseFloat(currentNumber);
            break;
        default:
            result = 0;
    }

    display.value = result.toString();
    currentNumber = result.toString();
    previousNumber = '';
    operator = '';
}