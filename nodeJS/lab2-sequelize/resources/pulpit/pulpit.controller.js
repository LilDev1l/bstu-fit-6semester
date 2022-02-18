const {StatusCodes} = require('http-status-codes');
const pulpitService = require('./pulpit.service');

async function getAll(req, reply) {
    const pulpits = await pulpitService.getAll();

    reply.code(StatusCodes.OK).send(pulpits);
}

async function addOne(req, reply) {
    const newPulpitParam = req.body;
    const newPulpit = await pulpitService.addOne(newPulpitParam);

    reply.code(StatusCodes.CREATED).send(newPulpit);
}

async function deleteOne(req, reply) {
    const { pulpit } = req.params;
    await pulpitService.deleteOne(pulpit);

    reply.code(StatusCodes.NO_CONTENT).send();
}

async function update(req, reply) {
    const updatePulpitParam = req.body;
    const updatePulpit = await pulpitService.update(updatePulpitParam);

    reply.code(StatusCodes.OK).send(updatePulpit);
}

module.exports = {
    getAll,
    addOne,
    deleteOne,
    update
}