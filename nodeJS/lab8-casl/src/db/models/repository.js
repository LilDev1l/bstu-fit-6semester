const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Repository', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        authorId: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }
    }, {
        timestamps: false,
        tableName: 'repositories',
    })
};
