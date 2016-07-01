import Ember from 'ember';

export default Ember.Mixin.create({
  counter1: 0,
  performCount: function (daysPromise) {
    daysPromise.then(days => {
      var count = 0;
      var currDay = moment();
      var ds = days.filterBy('date', currDay.format('YYYY-MM-DD'));

      while (ds.length === 1 && ds[0].get('value')) {
        count++;
        currDay.subtract(1, 'd');
        ds = days.filterBy('date', currDay.format('YYYY-MM-DD'));
      }

      this.set('counter1', count);
    });
  }
});
