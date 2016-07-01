import Ember from 'ember';

export default Ember.Controller.extend({
  calendarSorting: ['counter:desc'],
  sortedCalendars: Ember.computed.sort('model', 'calendarSorting'),
  session: Ember.inject.service('session'),
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
