const StatusCodes = require('http-status-codes');
const RepositoryService = require('./repository.service');
const {ForbiddenError, subject} = require('@casl/ability');

class RepositoryController {
    static async getAll(req, res, next) {
        try {
            ForbiddenError.from(req.ability).throwUnlessCan('read', 'Repository');
            const repositories = await RepositoryService.getAll();
            repositories.forEach(repository => ForbiddenError.from(req.ability).throwUnlessCan('read', subject('Repository', repository)));

            res.status(StatusCodes.OK).json(repositories);
        } catch (error) {
            next(error);
        }
    }

    static async getOne(req, res, next) {
        try {
            ForbiddenError.from(req.ability).throwUnlessCan('read', 'Repository');
            const repository = await RepositoryService.getOne(req.params.repositoryId);
            ForbiddenError.from(req.ability).throwUnlessCan('read', subject('Repository', repository));

            res.status(StatusCodes.OK).json(repository);
        } catch (error) {
            next(error);
        }
    }

    static async add(req, res, next) {
        try {
            ForbiddenError.from(req.ability).throwUnlessCan('create', subject('Repository', req.body));
            const newRepository = await RepositoryService.add(req.body);

            res.status(StatusCodes.OK).json(newRepository);
        } catch (error) {
            next(error);
        }
    }

    static async update(req, res, next) {
        try {
            ForbiddenError.from(req.ability).throwUnlessCan('update', 'Repository');
            const repository = await RepositoryService.getOne(req.params.repositoryId);
            ForbiddenError.from(req.ability).throwUnlessCan('update', subject('Repository', repository));
            const updateRepository = await RepositoryService.update(req.body, req.params.repositoryId);

            res.status(StatusCodes.OK).json(updateRepository);
        } catch (error) {
            next(error);
        }
    }

    static async delete(req, res, next) {
        try {
            ForbiddenError.from(req.ability).throwUnlessCan('delete', 'Repository');
            const repository = await RepositoryService.getOne(req.params.repositoryId);
            ForbiddenError.from(req.ability).throwUnlessCan('delete', subject('Repository', repository));
            await RepositoryService.delete(req.params.repositoryId);

            res.status(StatusCodes.NO_CONTENT).json();
        } catch (error) {
            next(error);
        }
    }
}

module.exports = RepositoryController;