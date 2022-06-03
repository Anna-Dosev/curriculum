// for loops execute a block of code a number of times

//for (statement1; statement2; statement3) {
    //block of code to execute
//}

// statement1 - declaration that is executed once
// statement2 - condition for executing the block of code
// statement3 - runs after every loop

for (let i = 0; i < 5; i++) { //starts at 1=0 and is going to keep going until i hits 10, ++ means "add another"
    //console.log(i); //prints out numbers 0 to 4
}

for (let i = 5; i > 0; i--) {
 //console.log(i)
}

for (let i = 1; i < 10; i++) {
    if (i %2 == 0) {
        //console.log(i);
    }
}

const arrayOfFriends = ['Alex', 'Caitlin', 'Molley']

for (let i = 0; i < arrayOfFriends.length; i++) {
   // console.log(arrayOfFriends[i])
}

for (let i = 0; i <2; i++) {
   // console.log(arrayOfFriends[i]);
}

// 1. write a tip calculator function that takes in a billAmount, and a service rating ('good' -> 20% tip, 'fair' -> 15% tip, 
//'bad' -> 10% tip), and returns the tip amount. 

function tipCalculator(billAmount, serviceRating) {
    if (serviceRating == 'good') {
        return billAmount*.20
    } else if (serviceRating == 'fair') {
            return billAmount*.15
    } else if  (serviceRating == 'bad') {
            return billAmount*.10
        }
    }
    
//console.log(tipCalculator(225, 'bad'))

// 2. write a function that takes in an array of numbers and returns an array of only even numbers

let jumbledArray = [1, 3, 6, 8, 10]
function onlyEvens (array) {
    let response = []
    for (i = 0; i < jumbledArray.length; i++) {
        if (array[i] % 2 == 0) {
            response.push(array[i]) 
        }
    }   
    return response
}
//console.log(onlyEvens(jumbledArray))

// 3. write a function that takes in an array of numbers and returns an array of only positive numbers

let jumbledArrayTwo = [-4, -80, 5, 16]
function onlyPositives (array) {
    let response = []
    for (i = 0; i < jumbledArrayTwo.length; i++) {
        if (array[i] > 0) {
            response.push(array[i])
        }
    }
    return response
}
//console.log(onlyPositives(jumbledArrayTwo))

// 4. write a for loop that prints the odd numbers between 105 and 125
for (let i = 105; i < 125; i++) {
    if (i % 2 != 0) {
        //console.log(i)
    }
}

// 5. write a function that takes in an array of numbers and multiplies each number in the array by 5
let jumbledArrayThree = [1, 6, 10]
function multByFive (array) {
    for (i = 0; i < jumbledArrayThree.length; i++) {
        console.log(jumbledArrayThree[i]*5)
    }
}
multByFive(jumbledArrayThree)

// 6. write a function that prints the mileage of each of the cars in this array of objects
const myCars = [
    { make: 'Chevy', model: 'Camaro', year: 2014, mileage: 75000 },
    { make: 'Ford', model: 'Mustang', year: 2021, mileage: 8000 },
    { make: 'Dodge', model: 'Challenger', year: 2008, mileage: 125000 },
    { make: 'Mercedes', model: 'G Wagon', year: 2022, mileage: 500 },
    ];

//myCars.forEach(car => { //for each of the obj in myCars, i want to refer to each obj as myCar
        //console.log(`mileage: ${car.mileage}`)
    //})
    //car is the individual that we are going over 

for (let i = 0; i <myCars.length; i++) { //shorter way- for loops do not need to be within a function
    console.log(myCars[i].mileage)
}







//function myCarMileage (array) {
    //for (i = 0; i < myCars.length; i ++) {
        //for (const mileage in myCars) {
           // if (myCars.keys(mileage) != null) {
                //console.log(myCars.values(mileage))
           // }
        //}
    //}
//}


// function myCarMileage () {
    // for (i = 0; i < myCars.length; i ++) {
        // for (const mileage in myCars) {
            // if (myCars.hasOwnProperty(mileage)) {
        // console.log(myCars[0])
    // }
// }
// }
// }

