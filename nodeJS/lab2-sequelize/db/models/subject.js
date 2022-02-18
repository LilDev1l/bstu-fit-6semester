const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Subject', {
        subject: {
            type: Sequelize.STRING,
            primaryKey: true,
        },
        subject_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        pulpit: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'subject'
    })
};
