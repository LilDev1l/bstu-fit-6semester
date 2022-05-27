const CommitRepository = require('./commit.repository');
const fastJson = require('fast-json-stringify');
const CommitOptions = require('./commit.options');

class CommitService {
    static async getAll(params) {
        const stringify = fastJson(CommitOptions.getAllCommitsOpts.schema.response['200']);

        return JSON.parse(stringify(await CommitRepository.getAll(params)));
    }

    static async getOne(params) {
        const stringify = fastJson(CommitOptions.getOneCommitOpts.schema.response['200']);

        return JSON.parse(stringify(await CommitRepository.getOne(params) || {}));
    }

    static async add(commit) {
        const stringify = fastJson(CommitOptions.postCommitOpts.schema.response['201']);

        const assCommit = await CommitRepository.add(commit)
        return JSON.parse(stringify(assCommit));
    }

    static async update(commit, ids) {
        const stringify = fastJson(CommitOptions.putCommitOpts.schema.response['200']);

        const upCommit = await CommitRepository.update(commit, ids)
        return JSON.parse(stringify(upCommit));
    }

    static async delete(ids) {
        const stringify = fastJson(CommitOptions.deleteCommitOpts.schema.response['204']);

        return JSON.parse(stringify(await CommitRepository.delete(ids)));
    }
}

module.exports = CommitService;