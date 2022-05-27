const AuditoriumController = require('./auditorium.controller');

function auditoriumRoute(fastify, options, done) {
    fastify.get('/', AuditoriumController.getAll);
    fastify.post('/', AuditoriumController.addOne);
    fastify.delete('/:auditorium', AuditoriumController.deleteOne);
    fastify.put('/', AuditoriumController.update);

    fastify.get('/gt60', AuditoriumController.getAllMore60);
    fastify.patch('/transaction', AuditoriumController.startTransaction);

    done();
}

module.exports = auditoriumRoute;