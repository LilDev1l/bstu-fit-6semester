const PulpitController = require('./pulpit.controller');

function pulpitRoute(fastify, options, done) {
    fastify.get('/', PulpitController.getAll);
    fastify.post('/', PulpitController.addOne);
    fastify.delete('/:pulpit', PulpitController.deleteOne);
    fastify.put('/', PulpitController.update);

    done();
}

module.exports = pulpitRoute;