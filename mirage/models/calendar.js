import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  days: hasMany('day', { inverse: 'calendar' }),
});
