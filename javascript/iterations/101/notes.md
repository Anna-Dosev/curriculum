# Iterations 101
## Imperatively looping over arrays

### Terms
**`break`**
exits a loop programmatically; used only with imperative statements

**`continue`**
skips over code within a loop but allows the loop t ocontinue; used only with imperative statements

**imperative programming**
exposes the execution of steps taken in order to achieve a results; the HOW is just as important as the WHAT

**infinite loop**
an iteration that has no exit condition, so it runs infinitely

**iterate**
to cycle through each individual item in a list

**statement**
a loop construct

### Statements

**for**
the statement has three parts- _begin_, _condition_, _next_.
after _begin_, which is executed only once, the order of firing is _condition_, _body_, and _next_.

```javascript
for (let i = 1; i < 10; i++) {
    console.log(i);
}
```

^ (i<10) is the condition
  inside {} is the body


  ```javascript
for (let i = 1; i < 10; i++) {
    //print multiples of 3 only
    if (i % 3 !==0) continue;
    console.log(i);
}
```
**while**
executes code as longa s the condition is `true`; it is possible that the condition is written so that the code never executes

```javascript
let count = 10; 
while (count > 0) {
    console.log(count);
    count-- //this decrements instead of counting up
}

//break when `count` is 5

let count = 10; 
while (count > 0) {
    if (count === 5) {
        console.log('we reached 5!')
        break;
    }
    console.log(count);
    count-- 
}
```

**do while**
executes code as long as the condition is `true`; it will always execute code in the body at least once

```javascript
let i = 0;
do {
    console.log(i)
    i++;
} while (i < 3)
```

**for...of**
iterates by value; this is a more succinct alternative to the **for** statement explained above
```javascript   
const items = ['apples', 'rice', 'soup'];
for (const item of items) {
    console.log(item);
}
```