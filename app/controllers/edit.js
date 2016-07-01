import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save() {
      this.get('model').save().then(
        () => this.transitionToRoute('calendars'),
        () => console.log('model not saved')
      );
    },
    delete() {
      this.get('model').destroyRecord().then(
        () => this.transitionToRoute('calendars'),
        (...args) => console.log(args)
      );
    }
  }
});
