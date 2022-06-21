# DOM 102
## Modifying the DOM comes down to learning a few methods and properties.

### Creating Elements
```javascript
const div = document.createElement('div') //document.createElement just creates the element; we cache it by assigning it to a const
    div.innerText = 'Hello World'; //these two lines < ^ in JS are <div>Hello World</div> in HTML>
    div.innerHTML = `<h1>Hi Again</hi>` //this would be <div><h1>Hi Again</hi><div> in JS; innerHTML respects the tag as if we wrote it in HTML, so this would show up as an h1 text 
    root.append(div) //assume that root is an element with an id of root; this actually changes the div

```

### Selecting Elements
```javascript
//returns a list of nodes
document.getElementsByTagName('p');
document.getElementsByClassName('section-content');
document.querySelectorAll('article.section-content'); //nested

//returns a single node
document.getElementById('root');
document.querySelector('article #root');

```

### Modifying Elements
```javascript
const root = document.getElementById('root');
root.setAttribute('data-id', 'someId');
root.style.color = 'crimson';
root.innerText = 'Some new text here';

```
