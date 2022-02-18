const facultyRepository = require('./faculty.repository');

async function getAll() {
    return facultyRepository.getAll();
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
    addOne,
    update,
    deleteOne
}