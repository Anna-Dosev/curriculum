const calculator = document.getElementById('calculator');
const output = document.getElementById('output');

let = outputValue = '';

calculator.addEventListener('click', function(e) { //have to put something in function parameter in order to access the event
    const clickId = e.target.getAttribute('data-clickId');
    //if clickId is a string of text, its NaN and isOperator will be true
    const isOperator = isNaN(clickId *1);
    if (isOperator) {
        outputValue+= ` ${clickId} `;
    } else {
        outputValue += clickId;
    }
    output.innerText = outputValue;
});

//concatenate means 'put them together'