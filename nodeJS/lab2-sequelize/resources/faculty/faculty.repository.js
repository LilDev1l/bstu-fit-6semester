const {sequelize} = require('../../db');
const {Faculty, Pulpit, Teacher} = sequelize.models;

async function getAll() {
    return Faculty.findAll();
}

async function getOneAndPulpits(faculty) {
    Faculty.hasMany(Pulpit, {foreignKey: 'faculty'});
    const faculties = await Faculty.findAll({
        include: [
            {model: Pulpit, required: true}
        ],
        where: {
             faculty: faculty
        }
    });

    return faculties;
}

async function getOneAndTeachers(faculty) {
    Faculty.hasMany(Pulpit, {foreignKey: 'faculty'});
    Pulpit.hasMany(Teacher, {foreignKey: 'pulpit'})
    const faculties = await Faculty.findAll({
        include: [
            {
                model: Pulpit, required: true,
                include: [{model: Teacher, required: true}]
            }
        ],
        where: {
            faculty: faculty
        }
    });

    return faculties;
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
    getOneAndPulpits,
    getOneAndTeachers,
    addOne,
    update,
    deleteOne
}