const {StatusCodes} = require('http-status-codes');
const auditoriumService = require('./auditorium.service');

async function getAll(req, reply) {
    const auditoriums = await auditoriumService.getAll();

    reply.code(StatusCodes.OK).send(auditoriums);
}

async function addOne(req, reply) {
    const newAuditoriumParam = req.body;
    const newAuditorium = await auditoriumService.addOne(newAuditoriumParam);

    reply.code(StatusCodes.CREATED).send(newAuditorium);
}

async function deleteOne(req, reply) {
    const { auditorium } = req.params;
    await auditoriumService.deleteOne(auditorium);

    reply.code(StatusCodes.NO_CONTENT).send();
}

async function update(req, reply) {
    const updateAuditoriumParam = req.body;
    const updateAuditorium = await auditoriumService.update(updateAuditoriumParam);

    reply.code(StatusCodes.OK).send(updateAuditorium);
}

async function getAllMore60(req, reply) {
    const updateAuditorium = await auditoriumService.getAllMore60();

    reply.code(StatusCodes.OK).send(updateAuditorium);
}

async function startTransaction(req, reply) {
    const message = await auditoriumService.startTransaction();

    reply.code(StatusCodes.OK).send({message: message});
}

module.exports = {
    getAll,
    addOne,
    deleteOne,
    update,
    getAllMore60,
    startTransaction
}