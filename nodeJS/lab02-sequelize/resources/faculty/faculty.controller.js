const {StatusCodes} = require('http-status-codes');
const facultyService = require('./faculty.service');

async function getAll(req, reply) {
    const faculties = await facultyService.getAll();

    reply.code(StatusCodes.OK).send(faculties);
}

async function getOneAndPulpits(req, reply) {
    const { faculty } = req.params;
    const facultyAndPulpits = await facultyService.getOneAndPulpits(faculty);

    reply.code(StatusCodes.OK).send(facultyAndPulpits);
}

async function getOneAndTeachers(req, reply) {
    const { faculty } = req.params;
    const facultyAndTeachers = await facultyService.getOneAndTeachers(faculty);

    reply.code(StatusCodes.OK).send(facultyAndTeachers);
}

async function addOne(req, reply) {
    const newFacultyParam = req.body;
    const newFaculty = await facultyService.addOne(newFacultyParam);

    reply.code(StatusCodes.CREATED).send(newFaculty);
}

async function deleteOne(req, reply) {
    const { faculty } = req.params;
    await facultyService.deleteOne(faculty);

    reply.code(StatusCodes.NO_CONTENT).send();
}

async function update(req, reply) {
    const updateFacultyParam = req.body;
    const updateFaculty = await facultyService.update(updateFacultyParam);

    reply.code(StatusCodes.OK).send(updateFaculty);
}

module.exports = {
    getAll,
    getOneAndPulpits,
    getOneAndTeachers,
    addOne,
    deleteOne,
    update
}