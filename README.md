# RSS Feed Reader Test Suites

## Installation

To ensure correct functionality of this test suite, first ensure that all of the Jasmine JS files are preloaded on the page ahead of the last file, boot.js within the head tag.

The `app.js` script will need to be loaded in a `<script>` tag once the DOM elements are created. As such it is better to link this file at the end of the `<body>` of the HTML document.

Lastly, the `feedreader.js` spec should be added also in a `<script>` tag at the end of the body, ensuring all testable JS is already linked.

## Use of test Suites

With the Jasmine test suite loaded, the page will open as normal but with additional HTML at the bottom of the page, representing the Jasmine test app itself.

All __Suites__ will be given parent style indentation, with all __specs__ indented as children of the suite below them.

## Test passes and failures

The colored bar below the Jasmine logo indicates the total number of spec's loaded and any failures after running them. The spec names should be written in green to show the tests all passed, and red if any part of them failed.
