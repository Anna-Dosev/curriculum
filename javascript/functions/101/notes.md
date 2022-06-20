# JavaScript Functions 101
## A general overview

### Terms
**anonymous function**
function that is not named; see also function expression
in this function exp, the function part is considered anon

const greeting = function(name) {
    return `Hello ${name}`;
}

**argument**
hardcoded value involved in the execution of the function; ie. **greeting('Andrea')** as opposed to greeting(name)

**call**
an action which executes (or fires) the functiongree

**callback function**
executes within the function to which it is passed as an argument

const cb = function () {
    console.log('I am the callback.');
}
function greeting(name, fn) {
    fn();
    return `Hello ${name}`;
}

greeting('Billy, cb)

**function**
Two contexts: function def itself and the code within the definition which executes when called and sometimes returns a value

**function body**
everythting in between the curly braces; contains the code of the function itslef

**function declaration**
uses the _function_ keyword to declare a named function
name of the function immediately follows the _function_ keyword

function greeting() {
    return 'Hello, you look nice today.';
}

**function expression**
initialization of a variable declaration; the variable, which is named, stores the function, but the function itself is considered anon/unnamed
const greeting = function() {
    rettturn 'Hello, you look nice today.';
}
only difference bt expression and declaration is using "const"

**hoisting**
allows a function dec to be used in code before it is declared

**IIFIE**
an immediately invoked function expression is a function that is executed directly by the JavaScript engine and not by other code
(function () {
    return 'Hello';
}) ();

IIFIEs can also have arguemts and parameters
(function (name) {
    return `Hello, ${name}.`;
}) ('Carlos');

**named function**
see function declaration, used interchangeably

**parameter**
placeholder whose value equals the argument passed into the function when it is called
ie. **greeting(name)** as opposed to greeting('Andrea)

**parentheses**
two purposes- exeucute/call the function (may contatin arguments) + another is part of the syntax to define the funnction (may contain parameters)

**return**
if implemented, it executes the last line of the function's code
precedes a data type or a collection tot be returned
a function closes/exits when the code that follows _return_ executes, so any lines beneath it are ignored 

**scope**
refers to to what values are available in memory at a given time during the execution of code
ie. trying to conosole.log(name) after only using greeting(name) and not actually doing **let name = 'Andrea'**

