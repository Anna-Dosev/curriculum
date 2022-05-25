


const peopleOnZoom = ['Oscar', 'Whitney', 'Ron', 'Hodan', 'Anna'];

const firstPersonInArray = peopleOnZoom[0];
const thirdPersoninArray = peopleOnZoom[2]

const oneZoomUser = {
    name: 'Whitney',
    location: 'Dallas',
    age: 35,
};

const whitLocation = oneZoomUser.location
const whitAge = oneZoomUser.age

const zoomUserInfo = [
    {
    name: 'Whitney',
    location: 'Dallas',
    age: 35,
},
{
    name: 'Ron',
    location: 'Houston',
    age: 25,
},
];
//^this data structure is called an 'array of objects'

//console.log(oneZoomUser)
//console.log(zoomUserInfo)
//console.log(firstPersonInArray, thirdPersoninArray)
//console.log(whitLocation, whitAge)

const employees = [
    {
      firstName: 'Michael',
      lastName: 'Jones',
      dateOfBirth: 1990,
      address: {
        line1: '201 Main St',
        line2: null,
        city: 'San Antonio',
        state: 'TX',
        zipCode: '77990',
      },
      hasCollegeDegree: true,
      dependents: ['daughter'],
    },
    {
      firstName: 'Sandra',
      lastName: 'Green',
      dateOfBirth: 1975,
      address: {
        line1: '505 L St',
        line2: 'Apt 3A',
        city: 'Austin',
        state: 'TX',
        zipCode: '77101',
      },
      hasCollegeDegree: true,
      dependents: ['mother-in-law', 'daughter', 'son'],
    },
    {
      firstName: 'Jonathan',
      lastName: 'Ruiz',
      dateOfBirth: 1985,
      address: {
        line1: '7550 Barn Ave',
        line2: null,
        city: 'San Antonio',
        state: 'TX',
        zipCode: '77990',
      },
      hasCollegeDegree: false,
      dependents: [],
    },
    {
      firstName: 'Mary',
      lastName: 'Berry',
      dateOfBirth: 1965,
      address: {
        line1: '12 4th St',
        line2: '#505',
        city: 'Houston',
        state: 'TX',
        zipCode: '77494',
      },
      hasCollegeDegree: true,
      dependents: ['son'],
    },
  ];

// print to console Mary Berry’s address
console.log(employees[3].address)

// print to console Sandra Green’s dependents
console.log(employees[1].dependents)

// what data type is `hasCollegeDegree`?
// what data structure is `address`?
// what data structure is `zipCode`?
// what data structure is `dependents`?
console.log('boolean', 'object', 'string', 'array')