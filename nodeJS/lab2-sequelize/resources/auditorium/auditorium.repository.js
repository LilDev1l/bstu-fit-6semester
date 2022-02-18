const {sequelize} = require('../../db');
const {Sequelize, Transaction} = require('sequelize');
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

async function getAllMore60() {
    return Auditorium.scope('capacityMore60').findAll();
}

async function startTransaction() {
    const t = await sequelize.transaction({isolationLevel: Transaction.ISOLATION_LEVELS.READ_UNCOMMITTED})
    await Auditorium.update({auditorium_capacity: 0}, {transaction: t, where: {}});

    setTimeout(() => {
        t.rollback();
    }, 1_000);

    return '-- start transaction';
}

module.exports = {
    getAll,
    addOne,
    update,
    deleteOne,
    getAllMore60,
    startTransaction
}