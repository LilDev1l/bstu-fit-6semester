const RepositoryRepository = require('./repository.repository');
const fastJson = require('fast-json-stringify');
const RepositoryOptions = require('./repository.options');

class RepositoryService {
    static async getAll() {
        const stringify = fastJson(RepositoryOptions.getAllRepositoriesOpts.schema.response['200']);

        return JSON.parse(stringify(await RepositoryRepository.getAll()));
    }

    static async getOne(id) {
        const stringify = fastJson(RepositoryOptions.getOneRepositoryOpts.schema.response['200']);

        return JSON.parse(stringify(await RepositoryRepository.getOne(id) || {}));
    }

    static async add(repository) {
        const stringify = fastJson(RepositoryOptions.postRepositoryOpts.schema.response['201']);

        return JSON.parse(stringify(await RepositoryRepository.add(repository)));
    }

    static async update(repository, id) {
        const stringify = fastJson(RepositoryOptions.putRepositoryOpts.schema.response['200']);

        const upRepository = await RepositoryRepository.update(repository, id)
        return JSON.parse(stringify(upRepository));
    }

    static async delete(id) {
        return RepositoryRepository.delete(id);
    }

    static async getAllByAuthorId(authorId) {
        return RepositoryRepository.getALlByAuthorId(authorId);
    }
}

module.exports = RepositoryService;