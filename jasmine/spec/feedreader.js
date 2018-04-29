/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(
  (function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe("RSS Feeds", function() {
      /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
      it("are defined", function() {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
      });

      it("have non empty, valid URLs", function() {
        for (let i = 0; i < allFeeds.length; i++) {
          expect(allFeeds[i].url).toBeDefined();
          expect(allFeeds[i].url).toMatch(/http|https/);
        }
      });

      it("have non empty, defined feed names", function() {
        allFeeds.forEach(function(feed) {
          expect(feed.name).toBeDefined();
          expect(feed.name.length).toBeGreaterThan(0);
        });
      });
    });

    describe("The menu", function() {
      it("is hidden on page load", function() {
        expect($("body").hasClass("menu-hidden")).toBe(true);
      });

      it("toggles visibility on icon click", function() {
        // Simulate clicking on the menu icon, triggering a change in visibility
        $(".menu-icon-link").click();
        expect($("body").hasClass("menu-hidden")).toBe(false);
        // Simulate second click
        $(".menu-icon-link").click();
        expect($("body").hasClass("menu-hidden")).toBe(true);
      });
    });

    describe("Initial Entries", function() {
      beforeEach(function(done) {
        loadFeed(1, function() {
          done();
        });
      });

      it("should have at least one entry in the feed container", function(done) {
        expect($(".feed").find(".entry").length).toBeGreaterThan(0);
        done();
      });
    });

    describe("New Feed Selection", function() {
      var feedNum = 0;
      var feed = $(".feed");
      var feedEntriesOne;
      var feedEntriesTwo;

      beforeEach(function(done) {
        loadFeed(feedNum, done);
      });

      it("initially the DOM article with entry class is empty", function() {
        expect($(".feed").html()).toMatch("");
      });

      it("feed loaded initial entries", function(done) {
        feedEntriesOne = feed.children();
        expect(feedEntriesOne.length).toBeGreaterThan(0);
        done();
      });

      it("second loaded feed has different entries", function(done) {
        feedEntriesTwo = feed.children();
        let firstFeedFirstEntry = feedEntriesOne[0];
        let secondFeedFirstEntry = feedEntriesTwo[0];
        expect(secondFeedFirstEntry.innerHTML).not.toMatch(firstFeedFirstEntry.innerHTML);
        done();
      });

      afterEach(function(done) {
        loadFeed(++feedNum, done);
      });
    });
  })()
);
