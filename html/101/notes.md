# HTML 101

## HTML forms the structure of all web pages

HTML -> hyper text markup language

The `<head>` tag configures the page and is not rendered by the browser
The `<title>` conntains thte name of the page and is rendered in the browser's tab
Tags that have opening and closing elements are known as container elements
Tags that do not have op/clos elements are NOT container elements and are called "self-closing tags"
To make reading an HTML file easier, lnies are nested within their paremt element.
Browsers read HTML and in a snese, HTML is like a long string.
Browsers can read files or you can start a server in VS Code with Go Live
Semantic- refers to search engine optimization

### Some of the most common elements are
#### semantic elements include
```
<ul> unordered list
<ol> ordered list
<li> list item; must be contained by a ul or ol tag
<header> header area of a page
<main> the main area of a page
<body> contains all other rendering HTML elements
<footer> footer area of a page
<nav> contains navigation elements; usually found inside `<header>`
<p> used for a single paragraph of text
<img /> used for images (self-closing); must have a `src` source attribute
<a> anchor tag, used to hyperlink elements; must have a `href` attribute; ie. 'about me' taking you to a different page
<h1> to <h6> h1 is largest heading option / h6 is smallest heading option
```
#### generic elements include
```
<section> defines a section for child elements; not semantic
<div> generic containing element; not semantic
```
#### tags used inside of `<head>`
```
<link> used to link a stylesheet, only found in the `<head>`
```