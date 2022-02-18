const SubjectController = require('./subject.controller');

function subjectRoute(fastify, options, done) {
    fastify.get('/', SubjectController.getAll);
    fastify.post('/', SubjectController.addOne);
    fastify.delete('/:subject', SubjectController.deleteOne);
    fastify.put('/', SubjectController.update);

    done();
}

module.exports = subjectRoute;