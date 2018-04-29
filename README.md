# RSS Feed Reader Test Suites

## Installation

To ensure correct functionality of this test suite, first ensure that all of the Jasmine JS files are preloaded on the page ahead of the last jasmine file, boot.js within the head tag.

For this project we are attaching Jasmine to the index.html file in the root directory of the project files.

While the suite is pre-installed for you in this instance, there are steps below to attach Jasmine to another webpage.
The Spec file you are making (A JS file with the test suites defined in it, in this case the `app.js` script) will need to be loaded in a `<script>` tag once the DOM elements are created. As such it is better to link this file at the end of the `<body>` of the HTML document.

After this, the `feedreader.js` spec should be added also in a `<script>` tag at the end of the body. This ensures all testable JS is already loaded and available to Jasmine.

## Use of test Suites

The tests are run by attaching them to a webpage, in this case index.html. Open the index.html file in your browser by double clicking the icon and selecting your preferred browser to open, or by dragging it into an open browser window.

The page will open as normal, displaying a list of articles but you will notice additional HTML at the bottom of the page which represents the Jasmine test app itself.

All __Suites__ will be given parent style indentation, with all __specs__ indented as children of the suite below them.

## Test passes and failures

The colored bar below the Jasmine logo indicates the total number of spec's loaded and any failures after running them. The spec names should be written in green to show the tests all passed, and red if any part of them failed.

## The included test suites

The suites included for this project ensure the following functionality.

RSS Feeds are available as a variable with hardcoded, named and valid URL's, to be loaded by the webpage.

The webpage menu is hidden from the user by default, and opens and closes with the use of the menu "hamburger" icon.

Each feed URL loads at least one entry for the user to see and click

The webpage should initially load a feed into the empty article element when the page loads and then load a new feed into the same element (replacing the previous one) when a new menu item is clicked.
