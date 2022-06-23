# JavaScript Functions 102
## An arrow function expression is more concise than the traditional function expression. However, there are caveats (discussed in separate video)

### Primary Advantages
the `function` keyword is replaced with `=>` , less characters

```javascript
const someFN = function () {
    return 'Hello Wrold';
};

const someFN = () => {
    return 'Hello World';
};
```
The curly braces and the `return` keyword can be removed entirely if everything can fit on one line.
```javascript
const someFN = function () {
    return 'Hello Wrold';
};

const someFN = () => 'Hello World';
```

Can remove parenthesis if there is only one argument
```javascript
//one argument
const greeting = function(name) {
    return `Hello ${name}`;
};

const greeting = name => `Hello ${name}`;

//more than one argument
const location = function(city, state) {
    return `The location is ${city}, ${state}`;
};

const location = (city, state) => `The location is ${city}, ${state}`;
```

A return that spans multiple lines can either use an explicit `return` with {}, or an implicit `return` with ()
```javascript
const studentDetails = function() {
    return {
        name: 'Angela',
        age: 16,
        grade: 91
    }
};

//explicit 
const studentDetails = () => {
    return {
        name: 'Angela',
        age: 16,
        grade: 91
    }
};

//implicit
const studentDetails = () => ()
    {   
        name: 'Angela',
        age: 16,
        grade: 91
    } //these {} incidcate that it's an object, still needed 
);

```
