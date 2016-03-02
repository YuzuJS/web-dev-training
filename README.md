# web-dev-training
Repo for teaching web dev.

### Quick Links
- [MDN](https://developer.mozilla.org/en-US/)
- [CanIUse.com](http://caniuse.com/)
- [HTML5 Rocks!](http://www.html5rocks.com/en/)

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

