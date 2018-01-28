import { module, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | mortgage-payment-calculator', function(hooks) {
    setupRenderingTest(hooks);

    skip('it renders', async function(assert) {
        // Set any properties with this.set('myProperty', 'value');
        // Handle any actions with this.set('myAction', function(val) { ... });

        await render(hbs`{{mortgage-payment-calculator}}`);

        assert.equal(this.element.textContent.trim(), '');

        // Template block usage:
        await render(hbs`
      {{#mortgage-payment-calculator}}
        template block text
      {{/mortgage-payment-calculator}}
    `);

        assert.equal(this.element.textContent.trim(), 'template block text');
    });
});
