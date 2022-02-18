const facultyRepository = require('./faculty.repository');

async function getAll() {
    return facultyRepository.getAll();
}

async function getOneAndPulpits(faculty) {
    return facultyRepository.getOneAndPulpits(faculty);
}

async function getOneAndTeachers(faculty) {
    return facultyRepository.getOneAndTeachers(faculty);
}

async function addOne(faculty) {
    return facultyRepository.addOne(faculty);
}

async function update(faculty) {
    return facultyRepository.update(faculty);
}

async function deleteOne(faculty) {
    return facultyRepository.deleteOne(faculty);
}

module.exports = {
    getAll,
    getOneAndPulpits,
    getOneAndTeachers,
    addOne,
    update,
    deleteOne
}