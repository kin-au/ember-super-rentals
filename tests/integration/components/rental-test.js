import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | rental", function (hooks) {
  setupRenderingTest(hooks);

  test("if renders rental property information", async function (assert) {
    await render(hbs`<Rental />`);
    assert.dom("article").hasClass("rental");
    assert.dom("article h3").hasText("Grand mansion");
    assert.dom("article .detail.owner").includesText("Veruca Salt");
    assert.dom("article .detail.type").includesText("Standalone");
    assert.dom("article .detail.location").includesText("Paris");
    assert.dom("article .detail.bedrooms").includesText("16");
    assert.dom("article .image").exists();
  });
});
