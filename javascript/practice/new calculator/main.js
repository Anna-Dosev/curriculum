const numbers = document.querySelector('.numbers');
const display = document.querySelector('.display');
const operators = document.querySelector('.operators');

let displayNumbers = '';

numbers.addEventListener('click', function(e) { //have to put something in function parameter in order to access the event
    const digit = e.target.innerText * 1; //forces the digit to be a number, bc by default its a string
    displayNumbers += digit; //whatever the displayed number is, add digit ()
    const isNumber = e.target.getAttribute('data-number') //passing in the name of the attribute from the html file
        if (isNumber) {
            display.innerText = displayNumbers;
        }
});

operators.addEventListener('click', function(e) {

    const operator = e.target.getAttribute('data-operator');
    alert(operator)
});