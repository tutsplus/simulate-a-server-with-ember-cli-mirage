import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  date(i) {
    return "2016-06-" + (15 + i);
  },
  value: true,
});
