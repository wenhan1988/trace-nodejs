var seetru = require('./../lib/index')({
  app: 'Locations',
  service: 3
});

var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 3003 });

server.route({
  method: 'GET',
  path:'/users/1',
  handler: function (request, reply) {

    var latency = Math.floor(Math.random() * 100) + 300;

    setTimeout(function () {
      reply({status: 'ok'})
    }, latency);
  }
});

server.start(function () {
  console.log('Hapi Server running at:', server.info.uri);
});
