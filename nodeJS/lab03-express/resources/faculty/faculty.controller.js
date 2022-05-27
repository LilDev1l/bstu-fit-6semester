const {StatusCodes} = require('http-status-codes');
const facultyService = require('./faculty.service');

async function getAll(req, res) {
    const faculties = await facultyService.getAll();

    res.status(StatusCodes.OK).json(faculties);
}

async function addOne(req, res) {
    const newFacultyParam = req.body;
    const newFaculty = await facultyService.addOne(newFacultyParam);

    res.status(StatusCodes.CREATED).json(newFaculty);
}

async function deleteOne(req, res) {
    const { faculty } = req.params;
    await facultyService.deleteOne(faculty);

    res.status(StatusCodes.NO_CONTENT).json();
}

async function update(req, res) {
    const updateFacultyParam = req.body;
    const updateFaculty = await facultyService.update(updateFacultyParam);

    res.status(StatusCodes.OK).json(updateFaculty);
}

module.exports = {
    getAll,
    addOne,
    deleteOne,
    update
}