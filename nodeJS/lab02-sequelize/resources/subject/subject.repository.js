const {sequelize} = require('../../db');
const {Subject} = sequelize.models;

async function getAll() {
    return Subject.findAll();
}

async function addOne(subject) {
    return Subject.create(subject);
}

async function update(subject) {
    const updateSubject = await Subject.update(subject, {returning: true, where: {subject: subject.subject}});
    return updateSubject[1][0];
}

async function deleteOne(subject) {
    return Subject.destroy({where: {subject: subject}});
}

module.exports = {
    getAll,
    addOne,
    update,
    deleteOne
}