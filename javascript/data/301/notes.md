## JavaScript Data 301
# understanding immutability comes down to understanding how data is stored in memoory

Primitive data types are immutable. Immutability means that whenever a variable is declared, it lives at a unique address in memory, and if it is later reinitialized (ie. re-assigned), it will live at a new unique address. If a variable is initialized by reference insread of by value, its unique address points to the referred address.
* strings
* booleans
* numbers
* null
* undefined

**Example**
```
 let age = 32 //initializes by value, it gets a unique address (ie. Hx78)
 let marysAge = 32 //initializes by reference, it gets a unique address (ie. Rw33) but this address doesn't hold a value, it just points to Hx78.
 age = 33 //with reinitialization, the new value is stored at a new address (Xa15)
     //with reinitialization, age got a new address, which does not match what marysAge is pointing to. marysAge is still pointing to old address, but age has a new address.
     //primitive is immutable --> you cannot keep a new value with the same name AND keep the same address; if you get a new value with the same variable name, you will get a new address
```


Collections of primitive data types are mutable, which means that when they are modified or updated, the data is not stored at a new address but remains at the original address when the variable was first declared. 
* arrays
* objects 

//When thinking about immutability, ask yourself: are these things sharing hte same address?