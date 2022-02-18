const pulpitRepository = require('./pulpit.repository');

async function getAll() {
    return pulpitRepository.getAll();
}

async function addOne(pulpit) {
    return pulpitRepository.addOne(pulpit);
}

async function update(pulpit) {
    return pulpitRepository.update(pulpit);
}

async function deleteOne(pulpit) {
    return pulpitRepository.deleteOne(pulpit);
}

module.exports = {
    getAll,
    addOne,
    update,
    deleteOne
}