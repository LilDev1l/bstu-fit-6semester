const sequelize = require('../../db/index');
const {User} = sequelize.models;

class UserRepository {
    static async getAll() {
        return User.findAll();
    }

    static async getOne(id) {
        return User.findByPk(id);
    }

    static async getOneByUsername(username) {
        return User.findOne({where: {username}, raw: true});
    }

    static async add(user) {
        return User.create(user);
    }
}

module.exports = UserRepository;