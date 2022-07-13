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

# API 302, 303, 304 and 305
## We use HTTP verbs to describe API requests and nouns to refer to the data they handle.

## There are many diff types of HTTP requests, but you will maiinly deal with just five of them.

### HTTP Verbs
There are four verbs; sometimes refer to what they do as CRUD operations
-create
    requests:
        `post` : to create new data
        `put` : to update data by overwriting everything in the data set (ie. will update all the data even if only changing email address)
-read
    requests:
        `get` : to retrieve data
-update
    requests:
        `put` : see above
        `patch` : to update data by overwriting only a part of a larger data set (ie. will only update email address)
        `post` : see above
-delete
    requests:
        `delete` : to delete data
NOTE: `patch` and `put` are similar but our practices will concentrate on `put`    

## Nouns
These describe the data and are usually preceded by a `/`
-`/contacts`
-`/users`
-`/photos`
-`/countries`

## API 304: HTTP status codes provide information about the request after the server has received it
### Codes fall into 5 categories
**100s**
informational; data has been received and is understood

**200s**
success; the data has been received, understood and accepted

**300s**
redirection; this may require additional action on the part of the client

**400s**
client errors

**500s**
server errors 

# API 305
## Javascript's `.fetch` API is one way to execute common HTTP requests

**`GET`**
```javascript
async function getData() { 
    const data = await fetch('https://sj-demo-contacts.herokuapp.com/contacts?auth=5x76') //whatever is returned is cached in 'data'
    .then(response => response.json()) //converts data from api to jason so we can read it
    .catch(err => console.err(err));
  console.log(data);
}
```
**`DELETE`**
```javascript
async function deleteData(id) { 
    const data = await fetch(`https://sj-demo-contacts.herokuapp.com/contacts/delete/${id}?auth=5x76`, { //need to set up an options object
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'DELETE',
    }) 
    .then(response => response.json())
    .catch(err => console.err(err));
  console.log(data);
}
```
**`POST`**
```javascript
async function postData(body) { 
    const data = await fetch('https://sj-demo-contacts.herokuapp.com/contacts/add?auth=5x7g', {
    body: JSON.stringify(body),
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'POST',
    }) 
    .then(response => response.json())
    .catch(err => console.err(err));
  console.log(data);
}
```
**`PUT`**
```javascript
async function postData(body, id) { 
    const data = await fetch(`https://sj-demo-contacts.herokuapp.com/contacts/${id}?auth=5x76`, {
    body: JSON.stringify(body),
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'PUT',
    }) 
    .then(response => response.json())
    .catch(err => console.err(err));
  console.log(data);
```

### Snippets
stackblitz: https://stackblitz.com/edit/js-am2hbl?file=index.js
305 video: https://www.youtube.com/watch?v=B8RM7nfqOLQ&feature=youtu.be
