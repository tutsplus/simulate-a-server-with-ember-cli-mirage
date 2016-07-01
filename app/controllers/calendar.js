import Ember from 'ember';
import CounterMixin from '../mixins/counter';

export default Ember.Controller.extend(CounterMixin, {
  month: moment().format('MMMM YYYY')
});
