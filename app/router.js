import EmberRouter from "@ember/routing/router";
import config from "ember-super-rentals/config/environment";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

// to add a page to be served to the app, must add to router.js
Router.map(function () {
  // add a route called "about" which is by default served at url /about
  // and will load the "about" template
  this.route("about");
  // can change the url by doing the below
  this.route("contact", { path: "/getting-in-touch" });
});
