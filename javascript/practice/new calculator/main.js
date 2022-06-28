const equals = document.querySelector('.equals');
const numbers = document.querySelector('.numbers');
const display = document.querySelector('.display');
const operators = document.querySelector('.operators');

let displayNumbers = ''; //need numbers as a string so they are concat and not added mathematically
let hasOperator = false; 
let sign = null;
let x = 0;
let y = 0;

const signs = {
    add: "+",
    minus: "-",
    multiply: "*",
    divide: "/"
}

const clearData = function() {
    displayNumbers = '';
    hasOperator = false;
    sign = null;
    x = 0;
    y = 0;
}

const renderDisplay = function() {
    display.innerText = displayNumbers
};

numbers.addEventListener('click', function(e) { //have to put something in function parameter in order to access the event
    const isNumber = e.target.getAttribute('data-number') //passing in the name of the attribute from the html file
    const isDecimal = e.target.hasAttribute('data-decimal')
    const isClear = e.target.hasAttribute('data-clear')
    
    if (isNumber) {
        const digit = e.target.innerText; //forces the digit to be a number, bc by default its a string
        displayNumbers += digit; //whatever the displayed number is, add digit ()
            //display.innerText = displayNumbers;
            if (!hasOperator) {
                x += digit * 1;
            } else {
                y += digit * 1;
            };
        renderDisplay();
        } else if (isDecimal) { //decimal
        const digit = e.target.innerText; 
        displayNumbers += digit; 
        renderDisplay();
        } else if (isClear) { //clearing 'C'
        clearData();
        renderDisplay();
        }
    });

operators.addEventListener('click', function(e) {
    hasOperator = true;
    const operator = e.target.getAttribute('data-operator');
    sign = operator; 
    if (!x) {
        x = displayNumbers * 1 //fristDigits = parseInt(displayNumbers); casting, forces string to be a number
    } 

    //displayNumbers += ' + ';
    displayNumbers += ` ${signs[operator]} `;
    renderDisplay();
});

equals.addEventListener('click', function() {
    let result = null; 
    if (signs[sign] === '+'){
        result = x + y;
    } else if (signs[sign] === '-') {
        result = x - y;
    } else if (signs[sign] === '*') {
        result = x * y;
    } else if (signs[sign] === '/') {
        result = x / y;
    }
    display.innerText = result;
    clearData();
})