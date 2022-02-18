const auditoriumRepository = require('./auditorium.repository');

async function getAll() {
    return auditoriumRepository.getAll();
}

async function addOne(auditorium) {
    return auditoriumRepository.addOne(auditorium);
}

async function update(auditorium) {
    return auditoriumRepository.update(auditorium);
}

async function deleteOne(auditorium) {
    return auditoriumRepository.deleteOne(auditorium);
}

module.exports = {
    getAll,
    addOne,
    update,
    deleteOne
}