# HTML 103
## Use attributes to modify the markup of an HTML element

**alt**
provides a brief description for `<img>` element to improve accessibility
can be found in src attribute

**class**
used specifically to target css
intended to be used repeatedly within the same HTML document
in css, triggered with a "."

**data-<someCustomAttribute**
stores a custom value in a custom attribute

**height**
applies a heigh in pixels to the element using numerical value only
use sparingly; better to use with css than directly in HTML

**href**
associated with "a" tags, required
href points to the link, also used to link internally
loads a stylesheet

**id**
stores a value that can be targeted by JavaScript or CSS, and/o referenced by the `href` of an anchor tag
Do not target an id with CSS
Id's are meant to only appear once, but CSS is meant to target things more than once throughout the doc
limits the targeters to hrefs within the html, or JavaScript

**lang**
denotes the language of an `<html>` element

**onclick**
executes JavaScript code when there is a click on a certain element

**src**
contains the path for internal/external URL of a resource to be loaded on the page
can be on multiple elements

**style**
allows style rules and CSS syntax to be included in an HTML document

**title**
contains text that can be used ina tool tip or to be read by screren readers
NOT the same as the title element
