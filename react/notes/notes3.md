# React 301 (React Router)
## An overview of `react-reacter`

#### https://www.youtube.com/watch?v=lhVQdbTF_Fw
### https://stackblitz.com/edit/react-kmdltg?file=src%2Findex.js

- Routing refers to what the browser shows in the view at a given URL
- If a url ends in a file extension, it means that routing is controlled by the server
- `react-router` is an NPM library
- One advantage of browser-side routing is the site is faster
- When the browser handles routing, it means we can avoid sending additional requests to the server
- One challenge we have with browser-side routing is dealing with shared state
- You can think of routing is a broadcast1.subscription (event listener/event handler) relationship
- Routing is all about matching the view to the URL
- `npm i react-router-dom` is the command to add react-router as a dependency to the project
- We must wrap the entire application in the `<BrowserRouter />` component
- Broadcasting a change in the URL can be done with the `<NavLink />` component
- The `to` prop on the `<NavLink />` component becomes the `href` attribute on an anchor tag in HTMl
- Each individual `<Route />` must be contained within a parent `<Routes />`component
- The `path` prop on `<Route />` matches a `to` prop on `<NavLink />`
- When there’s a match between the broadcast and the subscription, the component set in the `element` prop is rendered in the view
