# Server 101
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

1. npm init -y installs node modules within the directory
2. npm i express installs the express dependencies/package.json
3. touch server.js creates server file
4. go into server.js and cache it in memory: const express = require('express')
5. instantiate express const server = express()
6. server.listen to say what port the server is running on 
7. create get request at root: server.get('/', (req, res) => {
    res.json({message: "hello world."}) })


difference bt dependencies and devDependencies:
    dep requied to make the app work 
    devDep make it easier to develop the app itself