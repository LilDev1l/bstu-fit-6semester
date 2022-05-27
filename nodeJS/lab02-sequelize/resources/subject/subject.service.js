const subjectRepository = require('./subject.repository');

async function getAll() {
    return subjectRepository.getAll();
}

async function addOne(subject) {
    return subjectRepository.addOne(subject);
}

async function update(subject) {
    return subjectRepository.update(subject);
}

async function deleteOne(subject) {
    return subjectRepository.deleteOne(subject);
}

module.exports = {
    getAll,
    addOne,
    update,
    deleteOne
}