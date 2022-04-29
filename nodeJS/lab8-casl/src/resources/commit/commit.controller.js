const StatusCodes = require('http-status-codes');
const CommitService = require('./commit.service');
const {ForbiddenError, subject} = require('@casl/ability');

class CommitController {
    static async getAll(req, res, next) {
        try {
            ForbiddenError.from(req.ability).throwUnlessCan('read', 'Commit');
            const commits = await CommitService.getAll(req.params);
            commits.forEach(commit => ForbiddenError.from(req.ability).throwUnlessCan('read', subject('Commit', commit)));

            res.status(StatusCodes.OK).json(commits);
        } catch (error) {
            next(error);
        }
    }

    static async getOne(req, res, next) {
        try {
            ForbiddenError.from(req.ability).throwUnlessCan('read', 'Commit');
            const commit = await CommitService.getOne(req.params);
            ForbiddenError.from(req.ability).throwUnlessCan('read', subject('Commit', commit));

            res.status(StatusCodes.OK).json(commit);
        } catch (error) {
            next(error);
        }
    }

    static async add(req, res, next) {
        try {
            const commit = {...req.body, ...req.params};
            ForbiddenError.from(req.ability).throwUnlessCan('create', subject('Commit', commit));
            const newCommit = await CommitService.add(commit);

            res.status(StatusCodes.OK).json(newCommit);
        } catch (error) {
            next(error);
        }
    }

    static async update(req, res, next) {
        try {
            ForbiddenError.from(req.ability).throwUnlessCan('update', 'Commit');
            const commit = await CommitService.getOne(req.params);
            ForbiddenError.from(req.ability).throwUnlessCan('update', subject('Commit', commit));
            const updateCommit = await CommitService.update(req.body, req.params);

            res.status(StatusCodes.OK).json(updateCommit);
        } catch (error) {
            next(error);
        }
    }

    static async delete(req, res, next) {
        try {
            ForbiddenError.from(req.ability).throwUnlessCan('delete', 'Commit');
            const commit = await CommitService.getOne(req.params);
            ForbiddenError.from(req.ability).throwUnlessCan('delete', subject('Commit', commit));
            await CommitService.delete(req.params);

            res.status(StatusCodes.NO_CONTENT).json();
        } catch (error) {
            next(error);
        }
    }
}

module.exports = CommitController;