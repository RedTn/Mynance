import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('transform:frequency', 'Unit | Transform | frequency', function(hooks) {
    setupTest(hooks);

    // Replace this with your real tests.
    test('it exists', function(assert) {
        const transform = this.owner.lookup('transform:frequency');

        assert.ok(transform);
    });
});
