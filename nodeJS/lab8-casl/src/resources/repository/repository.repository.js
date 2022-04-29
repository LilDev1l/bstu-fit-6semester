const sequelize = require('../../db/index');
const {Repository} = sequelize.models;

class RepositoryRepository {
    static async getAll() {
        return Repository.findAll();
    }

    static async getOne(id) {
        return Repository.findByPk(id);
    }

    static async add(repository) {
        return Repository.create(repository);
    }

    static async update(repository, id) {
        await Repository.update(repository, {where: {id}})
        return Repository.findByPk(id);
    }

    static async delete(id) {
        return Repository.destroy({where: {id}});
    }

    static async getALlByAuthorId(authorId) {
        return Repository.findAll({where: {authorId}, raw: true});
    }
}

module.exports = RepositoryRepository;