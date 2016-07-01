export default function(server) {
  server.loadFixtures('calendars');
  server.createList('calendar', 5);

  var cal = server.create('calendar');
  server.createList('day', 16, { calendar: cal });

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  // server.createList('post', 10);
}
