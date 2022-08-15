# NodeJS 103, 104 and 105
## 103
## Node is JavaScript used outside of the browser
If we consider the browser to be an environment that uses javascript, we can see that it is other environments that use node.
For us specifically, node refers to the back end.

### Node Environments
node -v to see the version running
can use node in desktop apps, mobile apps, and servers 

### Node Can...
-access th eoperating system
-read from and write to the file system

### History
-Brenden Eich wrote javascript in 1995
-Ryan Dahl released the first iteration of NodeJS in 2009

### Common Server-Side Languages
-C#
-Go
-Java
-NodeJS
-PHP
-Python
-Ruby

## 104
## Modules make it easier to scale and maintain Node applications

### Modules
-compartmentalize code
-act as building blocks in an application
-adhere to an import-export pattern

### Types
-core
-local
-third-party

### Import
``` javascript
 const someModule = rerquire('someModule')

```

### Export
``` javascript
function someFunction() {
    //code here
}
module.exports = someFunction;
```

## 105 
https://www.youtube.com/watch?v=pcqYlIew3gw
this video includes the cowsay demo 

## **package.json** manages third-party modules found at [npm's repository] (https://www.npmjs.com/)

### What iiis npm?
[Docs] 
-it is an online repo for the publishiing of open-source node.js projects
-it is a ocmmand-line utility for interacting with said repo that adis in package installations, versiion management, and dependency management

### Open-source software
-free to use as per a specific license 
-devs are not compensated for it
-not guaranteed to work at all times

### Synonyms
-library
-module
-package
-dependency

### npm commands
`npm v (version)`
`npm nstall -g <someModule>` (global install, not recommended)
`npm install <someModule>` (local install, preferred)
`npm init -y` (creates package.json with default values)

### package.json
-"dependencies" lisit production libraries
"devDependencies" list the liibrareis used to write the code itself
-is created by `npm init -y`
-determnies the contents of **node_modules**

### node_modules
-contains all third-party modules installed with `npm`
-each module has its own **package.json** so this directory can be quite large
-often see our commands in the .bin files
-do not ever modify the code within its directory 

### Executing commands (if applicable)
using `cowsay` as an example
-node_modules/.bin/cowsay <enter text> 
```
 _____________
< Hello Anna! >
 -------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```
-npx cowsay <enter text>





