import { module, test } from "qunit";
import { click, visit, currentURL } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";

// acceptance test (aka. application test) tests app behaviour from user perspective

module("Acceptance | super rentals", function (hooks) {
  setupApplicationTest(hooks);

  test("visiting /", async function (assert) {
    // first visit / route, using await to ensure it loads before proceeding
    await visit("/");
    // currentURL is a test helper as imported above
    assert.equal(currentURL(), "/");
    assert.dom("nav").exists();
    assert.dom("h1").hasText("SuperRentals");
    assert.dom("h2").hasText("Welcome to Super Rentals!");
    // look inside the tag with jumbo class for an 'a' tag with button class
    assert.dom(".jumbo a.button").hasText("About Us");
    await click(".jumbo a.button");
    assert.equal(currentURL(), "/about");
  });

  test("visiting /about", async function (assert) {
    await visit("/about");
    assert.dom("nav").exists();
    assert.dom("h1").hasText("SuperRentals");
    assert.equal(currentURL(), "/about");
    assert.dom("h2").hasText("About Super Rentals");
    assert.dom(".jumbo a.button").hasText("Contact Us");
    await click(".jumbo a.button");
    assert.equal(currentURL(), "/getting-in-touch");
  });

  test("visiting /getting-in-touch", async function (assert) {
    await visit("/getting-in-touch");
    assert.dom("nav").exists();
    assert.dom("h1").hasText("SuperRentals");
    assert.equal(currentURL(), "/getting-in-touch");
    assert.dom("h2").hasText("Contact Us");
    assert.dom(".jumbo a.button").hasText("About");
    await click(".jumbo a.button");
    assert.equal(currentURL(), "/about");
  });

  test("navigating using the nav bar", async function (assert) {
    await visit("/");

    await click("nav a.menu-about");
    assert.equal(currentURL(), "/about");

    await click("nav a.menu-contact");
    assert.equal(currentURL(), "/getting-in-touch");

    await click("nav a.menu-index");
    assert.equal(currentURL(), "/");
  });
});
