const {StatusCodes} = require('http-status-codes');
const subjectService = require('./subject.service');

async function getAll(req, reply) {
    const subjects = await subjectService.getAll();

    reply.code(StatusCodes.OK).send(subjects);
}

async function addOne(req, reply) {
    const newSubjectParam = req.body;
    const newSubject = await subjectService.addOne(newSubjectParam);

    reply.code(StatusCodes.CREATED).send(newSubject);
}

async function deleteOne(req, reply) {
    const { subject } = req.params;
    await subjectService.deleteOne(subject);

    reply.code(StatusCodes.NO_CONTENT).send();
}

async function update(req, reply) {
    const updateSubjectParam = req.body;
    const updateSubject = await subjectService.update(updateSubjectParam);

    reply.code(StatusCodes.OK).send(updateSubject);
}

module.exports = {
    getAll,
    addOne,
    deleteOne,
    update
}