const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Faculty', {
        faculty: {
            type: Sequelize.STRING,
            primaryKey: true,
        },
        faculty_name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'faculty',
        hooks: {
            beforeCreate: (instance, options) => { console.log('-- local faculty beforeCreate') },
            afterCreate: (instance, options) => { console.log('-- local after afterCreate')}
        }
    })
};
