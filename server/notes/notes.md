# Server 101, 102, 103

# 101
## We use the `express` library to build servers

### Steps to build a simple server
Follow these steps in the project root folderr
-`npm init -y`
-`npm express`
-`npm i -D nodemon`
-`touch server.js`
-add the code to build a server
-`npx nodemon server.js` to start the server


notes from video:
https://www.youtube.com/watch?v=vNat7CDC3Fo

1. npm init -y installs package.json within the directory
2. npm i express installs the express dependencies/node modules/package-lock.json
3. touch server.js creates server file
4. go into server.js and cache it in memory: const express = require('express')
5. instantiate express const server = express()
6. server.listen to say what port the server is running on 
7. create get request at root: server.get('/', (req, res) => {
    res.json({message: "hello world."}) })


difference bt dependencies and devDependencies:
    dep requied to make the app work 
    devDep make it easier to develop the app itself

# 102
## Common express methods to handle client requests

`.get`  
Returns data to the client which the client has requested  
URL  
https://highonlife.com/members/328  
REQUEST BODY
```json
null
```
RESPONSE BODY
```json
{
  "city": "Austin",
  "hobbies": ["camping", "hiking", "skiing"],
  "id": 328,
  "isNewMember": false,
  "name": "Andrea"
}
```

`.post`  
Receives data from the client, usually as a value that corresponds to the key `body`, that is then used to create a record in a database (an ID is created by the database)  
URL  
https://highonlife.com/members/new  
REQUEST BODY
```json
{
  "city": "Birmingham",
  "hobbies": ["dozing", "napping", "sleeping"],
  "isNewMember": true,
  "name": "Billy",
}
```
RESPONSE BODY
```json
{
  "id": 329,
  "message": "new member created"
}
```

`.delete`  
Receives data from the client, usually an id, that is then used to delete a record from a database  
URL  
https://highonlife.com/members/delete/328  
REQUEST BODY
```json
null
```
RESPONSE BODY
```json
{
  "id": 328,
  "message": "member deleted"
}
```

`.patch`  
Receives data from the client which updates a record in the database by updating only part of it (e.g. a single value in an object with multiple key/value pairs)  
URL  
https://highonlife.com/members/modify/329  
REQUEST BODY
```json
{
  "city": "Boston"
}
```
RESPONSE BODY
```json
{
  "id": 329,
  "message": "member modified"
}
```

`.put`  
Receives data from the client which updates a record in the database by replacing the group it belongs to entirely  
URL  
https://highonlife.com/members/modify/329  
REQUEST BODY
```json
{
  "city": "Boston",
  "hobbies": ["dozing", "napping", "sleeping"],
  "id": 329,
  "isNewMember": false,
  "name": "Billy",
}
```
RESPONSE BODY
```json
{
  "id": 329,
  "message": "member updated"
}
```

# 103
## Express request object properties cache values sent from the client to the server

` req.body`
- an object that contains key/valiue pairs sent from the client to the server
- the server must implement middleware to parse JSON
- the request type myst be POST

` req.cookies`
- contains the  string that defines a cookie stored in the browser
- the server must implement middleware to parse cookies

` req.params`
- an object of key val pairs created by param routes and their values 

` req.query`
- an object of key val pairs created by query parameters supplied to the URL
-