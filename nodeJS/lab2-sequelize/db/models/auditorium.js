const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Auditorium', {
        auditorium: {
            type: Sequelize.STRING,
            primaryKey: true,
        },
        auditorium_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        auditorium_capacity: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        auditorium_type: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'auditorium',
        scopes: {
            capacityMore60: {
                where: {
                    auditorium_capacity: {
                        [Sequelize.Op.gt]: 60
                    }
                }
            }
        }
    })
};
