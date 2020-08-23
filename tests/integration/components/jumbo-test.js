import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

// component test (aka. rendering test) to render/test one component at a time

module('Integration | Component | jumbo', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders content inside jumbo header with tomster', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Jumbo>Hello world</Jumbo>`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <Jumbo>
        template block text
      </Jumbo>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
