const sequelize = require('../../db/index');
const {Commit, Repository} = sequelize.models;

class CommitRepository {
    static async getAll(params) {
        Commit.belongsTo(Repository, {foreignKey: 'repositoryId'});

        return Commit.findAll({
            include: [
                {model: Repository, required: true}
            ],
            where: {repositoryId: params.repositoryId},
            raw: true,
            nest: true
        });
    }

    static async getOne(params) {
        Commit.belongsTo(Repository, {foreignKey: 'repositoryId'});

        return Commit.findOne({
            include: [
                {model: Repository, required: true}
            ],
            where: {
                repositoryId: params.repositoryId,
                id: params.commitId
            },
            raw: true,
            nest: true
        });
    }

    static async add(commit) {
        return Commit.create(commit);
    }

    static async update(commit, ids) {
        const {commitId: id, repositoryId} = ids;

        await Commit.update(commit, {where: {id, repositoryId}});
        return Commit.findByPk(id);
    }

    static async delete(ids) {
        const {commitId: id, repositoryId} = ids;

        return Commit.destroy({where: {id, repositoryId}});
    }
}

module.exports = CommitRepository;