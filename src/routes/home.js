module.exports = {
  method: ['GET', 'POST'],
  path: '/home',
  config: { auth: 'ourStrategy' },
  handler: function (request, reply) {
    reply.view('home');
  }
}
