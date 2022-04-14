const {Sequelize} = require('sequelize');
const {msConfig} = require('../common/config');
const models = require('./models/index');

const sequelize = new Sequelize(msConfig.database, msConfig.username, msConfig.password, msConfig.option);

for (const key in models) {
    models[key](sequelize);
}

module.exports = sequelize;