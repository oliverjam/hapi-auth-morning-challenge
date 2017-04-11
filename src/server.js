const Hapi = require('hapi');
const handlebars = require('handlebars');
const vision = require('vision');
const auth = require('hapi-auth-basic');

const routes = require('./routes');

// The validation function(s) you have written
const validateFunc = require('../lib/validate');

var server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 4000
});

server.register([vision, auth], function (err) {
  if (err) throw err;

  server.views({
    engines: { hbs: handlebars },
    path: 'views'
  });

  server.auth.strategy('ourStrategy', 'basic', { validateFunc });
  server.auth.default('ourStrategy');

  server.route(routes);
});

module.exports = server;
