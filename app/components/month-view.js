import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Component.extend({
  weeks:  Ember.computed('days', function () {
    var getValue = function (days, obj) {
      var day = days.filter(day => day.get('date') === obj.date)[0];
      if (day) obj.value = day.get('value');
    };

    return DS.PromiseArray.create({
      promise: this.get('days').then(function (days) {
        var day = moment().date(1);
        var currMonth = day.month();

        if (day.day() !== 0) {
          day.day(0);
        }
        var weeks = [];

        while (day.month() <= currMonth) {
          var week = [];
          for (var i = 0; i < 7; i++) {
            var obj = {
              date: day.format('YYYY-MM-DD'),
              num: day.format('D'),
              currMonth: currMonth === day.month()
            };
            getValue(days, obj);
            week.push(obj);
            day.add(1, 'd');
          }
          weeks.push(week);
        }
        return weeks;
      })
    });
  }),
  store: Ember.inject.service(),
  actions: {
    test(date, value) {
      var existingRecord = this.get('days').filterBy('date', date)[0];

      if (existingRecord) {
        existingRecord.set('value', value);
        existingRecord.save();
      } else {
        var newDay = this.get('store').createRecord('day', {
          date: date,
          type: 'boolean',
          value: value
        });

        this.get('days').pushObject(newDay);
        newDay.save();
      }
    }
  }
});
