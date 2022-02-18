const {StatusCodes} = require('http-status-codes');
const teacherService = require('./teacher.service');

async function getAll(req, reply) {
    const teachers = await teacherService.getAll();

    reply.code(StatusCodes.OK).send(teachers);
}

async function addOne(req, reply) {
    const newTeacherParam = req.body;
    const newTeacher = await teacherService.addOne(newTeacherParam);

    reply.code(StatusCodes.CREATED).send(newTeacher);
}

async function deleteOne(req, reply) {
    const { teacher } = req.params;
    await teacherService.deleteOne(teacher);

    reply.code(StatusCodes.NO_CONTENT).send();
}

async function update(req, reply) {
    const updateTeacherParam = req.body;
    const updateTeacher = await teacherService.update(updateTeacherParam);

    reply.code(StatusCodes.OK).send(updateTeacher);
}

module.exports = {
    getAll,
    addOne,
    deleteOne,
    update
}