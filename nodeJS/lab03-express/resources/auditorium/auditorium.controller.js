const {StatusCodes} = require('http-status-codes');
const auditoriumService = require('./auditorium.service');

async function getAll(req, res) {
    const auditoriums = await auditoriumService.getAll();

    res.status(StatusCodes.OK).json(auditoriums);
}

async function addOne(req, res) {
    const newAuditoriumParam = req.body;
    const newAuditorium = await auditoriumService.addOne(newAuditoriumParam);

    res.status(StatusCodes.CREATED).json(newAuditorium);
}

async function deleteOne(req, res) {
    const { auditorium } = req.params;
    await auditoriumService.deleteOne(auditorium);

    res.status(StatusCodes.NO_CONTENT).json();
}

async function update(req, res) {
    const updateAuditoriumParam = req.body;
    const updateAuditorium = await auditoriumService.update(updateAuditoriumParam);

    res.status(StatusCodes.OK).json(updateAuditorium);
}

module.exports = {
    getAll,
    addOne,
    deleteOne,
    update
}