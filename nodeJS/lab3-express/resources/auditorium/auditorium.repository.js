const {sequelize} = require('../../db');
const {Auditorium} = sequelize.models;

async function getAll() {
    return Auditorium.findAll();
}

async function addOne(auditorium) {
    return Auditorium.create(auditorium);
}

async function update(auditorium) {
    const updateAuditorium = await Auditorium.update(auditorium, {returning: true, where: {auditorium: auditorium.auditorium}});
    return updateAuditorium[1][0];
}

async function deleteOne(auditorium) {
    return Auditorium.destroy({where: {auditorium: auditorium}});
}

module.exports = {
    getAll,
    addOne,
    update,
    deleteOne
}