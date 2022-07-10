# API 102, 202 and 203
## Promises allow users to keep using a site while data form somewhere else is gathered in the background

### Terms
**`async`/ `await`**
The most recent way to implement a promise. 
handles asynch data with a syntax that is fairly easy to read
    **`async`**
    keyword used to prefix functions that handle asynch data

    **`await`**
    keyword used to prefix the name of the function which calls asynch code and in which the response is cached. This keyworrd myst be used inside of another function that is prefixed ith `async`. 
   
**callback functions**
Before promises were a thing, we used callback functions to handle asynch code. Callback functions were a headache if we ever needed to call asynch logic sequentailly. This was known as callback hell.

**promise**
A promise returns a response but we cannot control or predict when this happens. In dev speak, we say that a function returns a promise when the function has asynch logic that other code depends upon before it can be executed.

**`Promise`**
a class made available by JS. We use an instance of this class to wrap asynch code. 

## Using an instance of `Promise` improves how we handle asynch code

A promise either resolves or rejects; each is a valid response that we handle inside of `.then` and `.catch`, respectively

### Terms
**`.catch`**
a method chained to the response that the promise returns with `reject`, and within wich we pass a callback function to handle the data.

**`.reject`**
a callback function provided by the promise that we call when the execution of the asynch code was unsuccessful

**`.resolve`**
a callback function provided by the promise that we call when the execution of the asynch code was successful

**`.then`**
a method chained to the response that the promise returns with `resolve`, and within wich we pass a callback function to handle the data. 

resolve : .then (means things worked)
reject : .catch (involves an error)

### Snippets
see index.js file in the API folder
202 youtube video notes: https://www.youtube.com/watch?v=a31y-nz_d2k

203 youtube video notes: https://www.youtube.com/watch?v=MYpoZKpdWBI