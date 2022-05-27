const {Sequelize} = require('sequelize');
const {mySqlConfig} = require('../common/config');
const models = require('./models/index');

const sequelize = new Sequelize(...Object.values(mySqlConfig));

for (const key in models) {
    models[key](sequelize);
}

module.exports = sequelize;