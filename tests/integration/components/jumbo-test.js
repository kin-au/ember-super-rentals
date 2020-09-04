import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

// component test (aka. rendering test) to render/test one component at a time

module("Integration | Component | jumbo", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders content inside jumbo header with tomster", async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Jumbo>Hello World</Jumbo>`);

    assert.dom(".jumbo").exists();
    assert.dom(".jumbo").hasText("Hello World");
    assert.dom(".jumbo .tomster").exists();
  });
});
