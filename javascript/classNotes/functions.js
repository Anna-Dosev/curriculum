//declare a function
//whatever is between the {} is what the function will execute 
function myGreeting () {
    console.log('Hello there');
} 


const myOtherGreeting = () => {
    console.log('Hello again');
};

//invoke or call the function via the function name and ()
//myGreeting();
//myOtherGreeting();

//function myPersonalGreeting(name) { //name is a parameter passed into the function
    //console.log('Hello, ' + name);
//}

//function myPersonalGreeting2(name) { 
  //  console.log('Hello, ' + name);
//}

function myPersonalGreeting(name2) {
    console.log(`Hello there, ${name2}`)
}

//myPersonalGreeting("Anna")
//myPersonalGreeting2("Maria")

function madLibs(verb, pluralNoun) {
    console.log(`I ${verb} ${pluralNoun}`)
}

//madLibs("eat", "cake")

//Instructions: write a function that takes in a name, a location, and a subject, and returns"
//"My name is __, I am from ___, and my favorite subject is __!"

function aboutMe(me, city, subject) {
    console.log(`My name is ${me}, I am from ${city}, and my favorite subject is ${subject}!`)
}

function aboutMe2(me, city, subject) {
    return `My name is ${me}, I am from ${city}, and my favorite subject is ${subject}!`
}

//aboutMe("Anna", "Pensacola", "music") //no return statement
//console.log(aboutMe2("Alex", "Jax", "math")) //has return statement

//Class problem 1
function difference(num1, num2) {
    return num2-num1
}
//console.log(difference(2, 10))

//Class problem 2
function multiplies(num1, num2) {
    return num2*num1
}
//console.log(multiplies(2, 10))

//Class problem 3
function divides(num1, num2) {
    return num2/num1
}
//console.log(divides(5, 10))

//equality operators
//console.log(1 == '1'); //true, bc a number is eq to a number
//console.log(1 === '1'); //false, bc a number is not eq to a string
// === is more strict than ==

//Post class notes
//1. Write a function that takes in a billAmount, a tipPercentage, and returns the tip amount.
function tipAmmount(bill, percentage) {
    return bill*percentage
}

//2. Write a function that takes in an array, and returns the length of the array.
function lengthOfArray(arrayParameter) {
    let array = [1, 2, 3, 4, 5, 6]
    return array.length
}

//3. Write a function that takes in the names of 3 friends and returns an array of those friends’ names.
function friendsNames(name1, name2, name3) {
    return [name1, name2, name3]
}

//4. Write a function that takes in an object of userData and returns the sentence
    //`The user's name is __, they are located in __, and they love the color __!`
function aboutUser() {
    let userData = {
        name3: 'Anna',
        location: 'Pensacola',
        favoriteColor: 'Blue'
    }
    return `The user's name is ${userData.name3}, they are located in ${userData.location}, and they love the color ${userData.favoriteColor}!`
}


//5. Write a function that takes in an array of numbers and returns the number in the last index
function arrayOfNumbers() {
    let array2 = [2, 4, 6, 8]
    return array2.pop()
}


console.log(tipAmmount(225,.20))
console.log(lengthOfArray())
console.log(friendsNames("Anna", "Alex", "Molley"))
console.log(aboutUser())
console.log(arrayOfNumbers())