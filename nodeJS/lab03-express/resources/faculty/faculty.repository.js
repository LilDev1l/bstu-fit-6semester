const {sequelize} = require('../../db');
const {Faculty} = sequelize.models;

async function getAll() {
    return Faculty.findAll();
}

async function addOne(faculty) {
    return Faculty.create(faculty);
}

async function update(faculty) {
    const updateFaculty = await Faculty.update(faculty, {returning: true, where: {faculty: faculty.faculty}});
    return updateFaculty[1][0];
}

async function deleteOne(faculty) {
    return Faculty.destroy({where: {faculty: faculty}});
}

module.exports = {
    getAll,
    addOne,
    update,
    deleteOne
}