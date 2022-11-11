# React 101
## A brief introduction to React

### React
- React is a library available at [NPM](https://www.npmjs.com/package/react)
- As such, any project built with React will have the file package.json even though React is used to write front-end code
- A React project is built from separate components which keep the code compartmentalized
- It was created and is maintained by developers at facebook
- React uses a shadow DOM to update the HTML DOM; your React code should not manipulate the HTML DOM directly
- React attaches itself to the DOM through the entry point which is located in **src/index.js**
- All of the code related to components is contained with the src directory

### Components
- Components are functions that share similarities with JavaScript render functions
- They must always `return` JSX
- JSX stands for javascript XML
- It looks like HTML but it is not HTML
- Each element in JSX must have either a corresponding closing tag or self-closing tag
- JSX can have only one parent element; all others must be nested inside of it
- Components are exposed and consumed for use through `import` and `export` statements; this makes it quite easy to pass them around as needed
- Elements within JSX have props, short for *properties*, but they look like HTML attributes
- Some of them are actually identical to HTML attributes, such as `id`, but others are different, such as `className` instead of `class`
- Unlike the functions you have learned about up until now, a component is not called but is rendered instead
- Rendering happens when the component is included within the entry point of another component
- The components form a tree whose root is contained within React's render method of the JSX
- Each component name in React must begin with a capital letter but the filename itself does not have to be capitalized
- The extension of the filename can be **.js** or **.jsx** but .jsx is preferred
- A component's `return` is not followed by any data structure or data type that you have previously learned about
- If the component returns a single element, it is written on one line
```jsx
return <p>Hello world</p>;
```
- However, a multi-line return needs parentheses
```jsx
return (
  <div>
    <p>Hello</p>
    <p>world</p>
  </div>
);
```


# React 102
## Managing state in React with `onClick`

### State
- The term we use to refer to the value of some variable in memory at a given moment in time is state
- Understanding how and when state changes is critical to becoming a strong developer
- A hook is simply a function (before hooks, some developers would have called it a helper function)
- All hooks in React are named exports so to import a React hook, curly braces are necesary
- Managing state requires a named noun and a named verb of your choice (the former holds a value while the latter sets the value)
- The syntax includes a destructuring assignment on an array
- The `useState` hook is executed with `useState()`
- Passing an argument to the `useState` hook is optional but doing so will set the initial state
- The value for state can be accessed anywhere within the component but must be enclosed within a set of curly braces

### Click handlers
- With React components, we no longer need the .addEventListener method to listen for events, such as clicks
- And we don't need to worry about event handlers either since it is no longer necessary ([source](https://github.com/facebook/react/issues/13635))
- For click events, we use the onClck prop directly on the element
- The value for this prop is known as the event handler
- The event handler can be defined inline or as a separate function; in either case, it changes state via the named <__22__> defined in the syntax that calls the `useState` hook
- Whenever state changes, React automatically re-renders the component so that UI properly reflects the change

---
event delegation
JSX
verb



# React 103
## React props are similar to the argument and parameter of a JavaScript function

A JavaScript function that takes one or more argument is defined with the same number of parameters
```javascript
// definition --> `name` is the parameter
function greeting(name) {
  return `Hello ${name}`;
}

// execution --> `'Andrea'` is the argument
greeting('Andrea');

````
- As such, they are related and we could say that a parameter and its corresponding argument form a key/value pair
- React components do not have parameters or arguments; instead they have props
- A prop is a key/value pair where the key acts as the parameter and value acts as the argument
- In React parlance, we say that props are passed down to a component
- Under the hood, React passes the props to a component on an object, usually called props, although you could name it whatever you want
- In order for the component to access the props being sent to it, it must capture the passed-in `props` object
- To save writing some code, you can also destructure the object with a set of curly braces
- Once captured, a prop value can be used within a component by wrapping its corresponding prop name within a set of curly braces
- Below is a React Greeting component
```jsx
function Greeting(`props`) {
  return <p>Hello {props.name}</p>;
}
```
- And rendering it looks like this
```jsx
<Greeting name="Andrea" />
```
- Its destructuring equivalent is
```jsx
function Greeting( {name} ) {
  return <p>Hello `{name}`</p>;
}
```
