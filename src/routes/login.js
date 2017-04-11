module.exports = {
  method: 'GET',
  path: '/',
  config: { auth: 'ourStrategy'},
  handler: function (request, reply) {
    reply.view('login');
  }
}
