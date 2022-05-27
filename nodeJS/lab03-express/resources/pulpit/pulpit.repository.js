const {sequelize} = require('../../db');
const {Pulpit} = sequelize.models;

async function getAll() {
    return Pulpit.findAll();
}

async function addOne(pulpit) {
    return Pulpit.create(pulpit);
}

async function update(pulpit) {
    const updatePulpit = await Pulpit.update(pulpit, {returning: true, where: {pulpit: pulpit.pulpit}});
    return updatePulpit[1][0];
}

async function deleteOne(pulpit) {
    return Pulpit.destroy({where: {pulpit: pulpit}});
}

module.exports = {
    getAll,
    addOne,
    update,
    deleteOne
}