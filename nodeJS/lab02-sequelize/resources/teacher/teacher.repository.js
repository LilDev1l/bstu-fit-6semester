const {sequelize} = require('../../db');
const {Teacher} = sequelize.models;

async function getAll() {
    return Teacher.findAll();
}

async function addOne(teacher) {
    return Teacher.create(teacher);
}

async function update(teacher) {
    const updateTeacher = await Teacher.update(teacher, {returning: true, where: {teacher: teacher.teacher}});
    return updateTeacher[1][0];
}

async function deleteOne(teacher) {
    return Teacher.destroy({where: {teacher: teacher}});
}

module.exports = {
    getAll,
    addOne,
    update,
    deleteOne
}