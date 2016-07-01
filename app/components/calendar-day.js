import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'td',
  classNameBindings: ['notCurrent', 'hasValue'],
  notCurrent: Ember.computed('day.currMonth', function () {
    return !this.get('day').currMonth;
  }),
  hasValue: Ember.computed('day.value', function () {
    return !!this.get('day').value;
  }),
  click() {
    var date = this.get('day.date');
    if (this.get('day.currMonth') && moment().isSameOrAfter(date)) {
      var prevValue = this.get('day.value');

      this.set('day.value', !prevValue);
      this.get('onClick')(date, !prevValue);
    }
  }
});
