import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save() {
      return this.get('model').save().then(
        () => this.transitionToRoute('calendars'),
        () => console.log('model not saved')
      );
    },
    cancel() {
      this.get('model').deleteRecord();
      return true;
    }
  }
});
