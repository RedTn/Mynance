import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
    init() {
        this._super(...arguments);
    },
    model() {
        return get(this, 'store').createRecord('mortgage', {
            purchasePrice: 500000,
            amortization: 25,
            downPayment: 20,
            frequency: 'Monthly',
            interest: 3
        });
    }
});
