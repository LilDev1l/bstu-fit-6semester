const TeacherController = require('./teacher.controller');

function teacherRoute(fastify, options, done) {
    fastify.get('/', TeacherController.getAll);
    fastify.post('/', TeacherController.addOne);
    fastify.delete('/:teacher', TeacherController.deleteOne);
    fastify.put('/', TeacherController.update);

    done();
}

module.exports = teacherRoute;