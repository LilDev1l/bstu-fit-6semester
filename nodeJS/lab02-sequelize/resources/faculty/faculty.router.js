const FacultyController = require('./faculty.controller');

function facultyRoute(fastify, options, done) {
    fastify.get('/', FacultyController.getAll);
    fastify.get('/:faculty/pulpits', FacultyController.getOneAndPulpits);
    fastify.get('/:faculty/teachers', FacultyController.getOneAndTeachers);
    fastify.post('/', FacultyController.addOne);
    fastify.delete('/:faculty', FacultyController.deleteOne);
    fastify.put('/', FacultyController.update);

    done();
}

module.exports = facultyRoute;