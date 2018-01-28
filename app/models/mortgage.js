import DS from 'ember-data';
import { computed, getProperties } from '@ember/object';
import { A } from '@ember/array';

const { Model, attr } = DS;

export default Model.extend({
    frequencyOptions: A(['Monthly']),
    purchasePrice: attr('number'),
    downPayment: attr('number'),
    amortization: attr('number'),
    frequency: attr('frequency'),
    interest: attr('number'),
    payment: computed(
        'purchasePrice',
        'downPayment',
        'amortization',
        'frequency',
        'interest',
        function() {
            const { purchasePrice, downPayment, amortization, interest } = getProperties(
                this,
                'purchasePrice',
                'downPayment',
                'amortization',
                'frequency',
                'interest'
            );
            const c = interest / (12 * 100);
            const n = amortization * 12;

            return (
                purchasePrice *
                (1 - downPayment / 100) *
                (c * Math.pow(1 + c, n)) /
                (Math.pow(1 + c, n) - 1)
            ).toFixed(2);
        }
    )
});
