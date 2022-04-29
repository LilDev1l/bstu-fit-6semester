const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Commit', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        message: {
            type: Sequelize.STRING,
            allowNull: false
        },
        repositoryId: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }
    }, {
        timestamps: false,
        tableName: 'commits',
    })
};
