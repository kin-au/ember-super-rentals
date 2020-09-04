import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | nav-bar", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders nav items", async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<NavBar />`);

    assert.dom(".menu-index").exists();
    assert.dom("nav a.menu-index").hasText("SuperRentals");
    assert.dom("nav a.menu-about").exists();
    assert.dom("nav a.menu-about").hasText("About");
    assert.dom("nav a.menu-contact").exists();
    assert.dom("nav a.menu-contact").hasText("Contact");
  });
});
