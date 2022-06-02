//if statements

//if (condition) {
//}

// if condition is true, execute code in curly braces

const myAge =35
if (myAge < 100) {
    //console.log('You are still young!');
}

if (myAge < 21) {
    //console.log('You are a baby!');
}

const dayOfWeek = 'Tues'
if (dayOfWeek == 'Fri') {
    //console.log('Today is Friday')
} else {
   // console.log('Today is not Friday')
}

//add if statment to function code
function tipAmmount(bill, percentage) {
    if (bill < 0) {
        return ('You must use a positive number')
    } else {return bill*percentage}
}
console.log(tipAmmount(225, .15))

function isNumberEven(num1) {
    if (num1 % 2 == 0) { // % divides by number that follows it and tells if there is a remainder 
        return ('Number is even')
    } else {
        return ('Number is odd')
    }
    }
console.log(isNumberEven(45))

function userAge(age) {
    if (age < 18) {
        return 'You are not allowed to see this page.'
    } else if (age < 21) {
        return 'You are allowed to see some of this page'
    } else {
        return 'You have full access to this page'
    }
    }
console.log(userAge(21))