import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('calendar');
  },
  actions: {
    cancel() {
      this.transitionTo('calendars');
    }
  }
});
