const teacherRepository = require('./teacher.repository');

async function getAll() {
    return teacherRepository.getAll();
}

async function addOne(teacher) {
    return teacherRepository.addOne(teacher);
}

async function update(teacher) {
    return teacherRepository.update(teacher);
}

async function deleteOne(teacher) {
    return teacherRepository.deleteOne(teacher);
}

module.exports = {
    getAll,
    addOne,
    update,
    deleteOne
}