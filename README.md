# web-dev-training
Repo for teaching web dev.

### Quick Links
- [MDN](https://developer.mozilla.org/en-US/)
- [CanIUse.com](http://caniuse.com/)
- [HTML5 Rocks!](http://www.html5rocks.com/en/)
- [node 0.12 API Docs](https://nodejs.org/docs/latest-v0.12.x/api/index.html)
- [express node framework](http://expressjs.com/)
- [CSS Tricks](https://css-tricks.com)
- [CSS Almanac](https://css-tricks.com/almanac/)

## session 01
- Introduce basic html and css concepts.
- Where to place css and js.
- The importance of a normalize or reset css stylesheet.
- How to query an element and add an event listener.
- Mention standard bodies - W3C and WhatWG.
- [Sample html](sample-html/index.html)

## session 02
- Sizing of block elements (using % and min-* and max-*)
- Used margin: auto to vertical aligin.
- More semantic html tags- nav, section, article, footer
- Introduced float, changing an elements display (from block to inline).
- New background properties (using shorthand syntax)
  - no-repeat
  - linear-gradient
  - position (bottom right)

## session 03
- Create static html page showcasing an html form.
- Using form fields
    + email
    + date
    + color
    + range
    + checkbox
    + radio
    + select
- Use input attributes
    - required
    - autofocus
    - disabled
    - readonly
    - maxlength
    - selected (for select options)
    - checked
- Hijack form submit for custom validation. Prevent submit if form is not valid.
- Introduced IIFE to create a "module" of code inside app.js

## session 04
- Style our contact form.
- Base form validation on password.
- Hide and show error message display. (Use JS to remove a class).
- New "input" event to listen to changes in the range input.
    + on input, render the new range input in an output tag.
- Create a super simple node http server that listens for posts to students.
    + output form data back to the screen.
- Standard node module - `http` and `querystring`.
- To run http server, from the command line `node node-simple-server/server.js`

## session 05
- Serve static html files from node. No more serveing files from filesystem!
- Use `fs` module to find out if file exists or is a directory.
- Use `path` module to create valid paths.
- Use global `process` object to get current working directory.

## exercise group 01
- 404.html
    + If we get a 404, let's render the `404.html`.
- 500.html
    + If we get a 500, let's render the `500.html`.
- On POST to `/students`
    + When we POST to /students. The server should redirect to `/student-added.html` (Hint make sure to set the right HTTP status)
        * The message should be in a box similar to what we did in the error message. Only with green border, green text, and light green background. The message should say "Student has been added. View all students." View all students should be a link `students.html`.
    + We should save a file "students.json"; This json file should be represent ALL the students. We should APPEND to the array (create the file if does not exist). For extra credit, if the email already exists, we should respond with some sort of 400 error (/student-added.error.html).
- students.html
    + A list of students. Hardcode data for now (3 mocks)

## session 06
- Add ability to render dynamic html
    + Create a View class to load template and bind data.
- Cleanup folder structure w/ views and controllers.
- Learn about some new css properties
    - transition
    - transform (scale, rotate)
    - text-shadow
- Learn about css psuedo classes
    + :visited
    + :hover
    + :active
    + :first-child, :last-child
- Learn about css psuedo elements
    + ::before, ::after
    + ::selection
    + ::first-line, ::first-letter

## exercise group 02
- student-added and student-already-exists html files should be using the same layout (header and footer).
- Implement rendering list item html for students view.
- Add consistent padding/margin to the main content area. Currently 404, error pages, success pages, seem to not have the same look.

## session 07
- Reviewed MVC server side architecture - [YouTube Video](https://www.youtube.com/watch?v=3mQjtk2YDkM)
- Looked at the [express node framework](http://expressjs.com/)
    + Install express generator: `npm install express-generator -g`
    + Create new express project using the `express-generator`
    + http://expressjs.com/en/starter/generator.html
    + command `express --ejs`
- Reviewed DOM api
    + element.children vs element.childNodes
    + element.firstChild vs element.firstChildElement
    + textNode (nodeType is 3) vs element (nodeType is 1)
- Reviewed css layout and positioning
    + position: absolute|relative
    + left/top/right/bottom properties
    + display: inline-block
    + float: left|right
        + [All about floats](https://css-tricks.com/all-about-floats/)
        + [Block Formatting Context](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context)
    + clear: both
- Introduced overflow css prop
- JSFiddle of inline-block vs float: (https://jsfiddle.net/9dpd3ehL/2/)
- JSFiddle of [Custom Grid System](https://jsfiddle.net/1fzheq8s/2/)
- [Media Queries](https://css-tricks.com/css-media-queries/)
- Future Layouts are Flexbox and MS Grid

## session 08
- Looked CSS libraries
    + [Foundation for Sites](http://foundation.zurb.com/sites/docs/grid.html)
    + [Foundation for Apps](http://foundation.zurb.com/apps/docs/#!/)
    + [Bootstrap](http://getbootstrap.com/)
    + [Materialize](http://materializecss.com/)

## exercise group 03
- Create a new express app for a brochure website using bootstrap css/js
