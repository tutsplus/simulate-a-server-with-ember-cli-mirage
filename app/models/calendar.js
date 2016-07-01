import Model from 'ember-data/model';
import Ember from 'ember';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  name:   attr('string'),
  notes:  attr('string', { defaultValue: '' }),
  days:   hasMany('day'),
  count: 0,
  counter: Ember.observer('days.@each.value', function () {
    this.get('days').then(days => {
      var count = 0;
      var currDay = moment();
      var ds = days.filterBy('date', currDay.format('YYYY-MM-DD'));

      while (ds.length === 1 && ds[0].get('value')) {
        count++;
        currDay.subtract(1, 'd');
        ds = days.filterBy('date', currDay.format('YYYY-MM-DD'));
      }

      this.set('count', count);
    });
  })
});
