const {StatusCodes} = require('http-status-codes');
const pulpitService = require('./pulpit.service');

async function getAll(req, res) {
    const pulpits = await pulpitService.getAll();

    res.status(StatusCodes.OK).json(pulpits);
}

async function addOne(req, res) {
    const newPulpitParam = req.body;
    const newPulpit = await pulpitService.addOne(newPulpitParam);

    res.status(StatusCodes.CREATED).json(newPulpit);
}

async function deleteOne(req, res) {
    const { pulpit } = req.params;
    await pulpitService.deleteOne(pulpit);

    res.status(StatusCodes.NO_CONTENT).json();
}

async function update(req, res) {
    const updatePulpitParam = req.body;
    const updatePulpit = await pulpitService.update(updatePulpitParam);

    res.status(StatusCodes.OK).json(updatePulpit);
}

module.exports = {
    getAll,
    addOne,
    deleteOne,
    update
}