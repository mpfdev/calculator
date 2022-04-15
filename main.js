const display = document.querySelector('.results');
const numbers = document.querySelector('.operands');
const allBtns = document.querySelectorAll('.btn');

let storageValue = []
let holdValue = '';
let operationValue = '';

allBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let symbol = e.target.innerText;

        if (symbol === '+' || symbol === '-' || symbol === 'x' || symbol === '/') {
            console.log({storageValue}, storageValue.length, storageValue.length === 2);
            if(storageValue.length === 2) {
                storageValue.push(holdValue);
                const result = operate(storageValue[1], storageValue[0], storageValue[2]);
                holdValue = result;
                storageValue = [];
                //FIX DISPLAY
                display.textContent = '';
            } else {
                operator(symbol, holdValue);
                holdValue = ''; 
                console.log('or here')
            }

            
        } else if (symbol === '=') {
            storageValue.push(holdValue);

            if (storageValue.length === 3) {
                const result = operate(storageValue[1], storageValue[0], storageValue[2]);
                holdValue = result;
                storageValue = [];
            }

        } else if (symbol === 'RESET') {
            holdValue = '';
            operationValue = '';
            storageValue = [];
        } else if (symbol === 'DEL') {
            holdValue = holdValue.slice(0, -1);
        } else {
            holdValue += e.target.innerText;
            operationValue += e.target.innerText;
        }

        display.textContent = holdValue;
        numbers.textContent = operationValue;
    })
})

function operator(symbol, value) {
    switch(symbol) {
        case '+':
            storageValue.push(value);
            storageValue.push('+')
            operationValue += '+';
            break;
        case '-':
            storageValue.push(value);
            storageValue.push('-')
            operationValue += '-';
            break;
        case 'x':
            storageValue.push(value);
            storageValue.push('*')
            operationValue += 'x';
            break;
        case '/':
            storageValue.push(value);
            storageValue.push('/')
            operationValue +=  '/';        
            break;
    }
}


function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(operator, firstNumber, secondNumber) {
    console.log('its called!')
    console.log({operator}, {firstNumber}, {secondNumber}, {storageValue});
    let a = Number(firstNumber);
    let b = Number(secondNumber);
    switch(operator) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
    }
}