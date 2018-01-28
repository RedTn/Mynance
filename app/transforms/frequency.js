import DS from 'ember-data';

const { Transform } = DS;

export default Transform.extend({
    deserialize(serialized) {
        return {
            '12': 'Monthly'
        }[serialized];
    },

    serialize(deserialized) {
        return {
            Monthly: 12
        }[deserialized];
    }
});
