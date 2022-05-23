# JavaScript Data 201
## Data types can be collected in other structures like objects and arrays

## Ojects
An object describes something. It lives inside of opening and closing {} and is organized as key:value pairs, separated by commas. The key and the value are themselves separated by a `:`. An object is NOT a data type, it is a collection of data types. 
```
const car = {
    color: 'green',
    mileage: 67302,
    isNew: false
};
```
## Arrays
An array is a list of items. It is defined by opening and closing []. The items in the array are separated by commas. Each item in an array is indexed with a number. Arrays can contain any data types as well as objects.An array is NOT a data type, it is a collection of data types. 
```
const shoppingList = ['apples', 'celery', 'bread'];
const ages = [7, 7, 8, 8, 7.5];
const cas = [
    {
        color: 'green',
        mileage: 67302,
        isNew: false
    },   
        {
        color: 'red',
        mileage: 34712,
        isNew: false
    },
        {
        color: 'blue',
        mileage: 167209,
        isNew: false
    },
        {
        color: 'yellow',
        mileage: 14301,
        isNew: false
    }
];

```