import { test } from 'qunit';
import moduleForAcceptance from 'stretch/tests/helpers/module-for-acceptance';
import { authenticateSession } from 'stretch/tests/helpers/ember-simple-auth';

moduleForAcceptance('Acceptance | calendars', {
  beforeEach() {
    authenticateSession(this.application);
  }
});

test('I want to see a list of calendars', function(assert) {
  server.createList('calendar', 5);

  visit('/calendars');

  andThen(function() {
    assert.equal(find('.cal-list li').length, 5);
  });
});

test('I want to be able to visit a calendar page', function (assert) {
  let calendar = server.create('calendar', { name: 'Awesome Test Calendar' });

  visit('/calendars/' + calendar.id);

  andThen(function () {
    assert.equal(find('h1:contains(Awesome Test Calendar)').length, 1);
  });
});

test('I want the PATCH endpoint to be hit after editing', function (assert) {
  let done = assert.async();

  let calendar = server.create('calendar');

  server.patch('/calendars/:id', (schema, request) => {
    assert.equal(request.params.id, calendar.id);
    done();

    let attrs = server.normalizeRequestAttrs();
    return schema.calendars.find(request.params.id).update(attrs);
  });

  visit('/calendars/' + calendar.id + '/edit');
  fillIn('input', 'New Test Calendar');
  click('button:contains(Save)');
});
