# Iterations 102
## Declaratively looping over arrays

## Terms
**declarative programing**
hides the execution steps taken to achieve a result
the WHAT is more important then the HOW

**method**
a function available to a specific data type (e.g. string) or a collection (e.g. array)

### Methods
In each of the methods below, we provide a callback function for at least one argument

**`.forEach`**
executes logic on each item of an array; the return value is `undefined`

```javascript
const list = ['apples', 'rice', 'soup'];
list.forEach(function(item, index) {  //when function passed in as an arguement, called a callback function
 console.log(`Item ${index + 1} is ${index}`);
}); 

```

**`.map`**
rerturns a new array that maniuplates each item of the array on which it is called in some way
```javascript
const list = ['a', 'b', 'c'];
const newList = list.map(function(item, index) {
    return item.toUpperCase() //return statement is vital; the map must return a value, and its creating an array of all the values
});

```


**`.filter`**
returns a new array that is a subset of items of the array on which it is called
```javascript
const list = [1, 2, 3, 4]
const evens = list.filter(function(item, index) {
   return item %2 === 0; //if dividing by 2 leaves a remainder of 0
});

```


**`.reduce`**
does not return an array, but a single combined value which aggregates the items of the array on which it is called
```javascript
const list = [1, 2, 3, 4]
const total = list.reduce(function(sum, item) {
    return sum + item
}, 0) //0 is the second argument; specific to summing the values in an array, indicates starting point
```

