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

async function getAllMore60() {
    return auditoriumRepository.getAllMore60();
}

async function startTransaction() {
    return auditoriumRepository.startTransaction();
}

module.exports = {
    getAll,
    addOne,
    update,
    deleteOne,
    getAllMore60,
    startTransaction
}