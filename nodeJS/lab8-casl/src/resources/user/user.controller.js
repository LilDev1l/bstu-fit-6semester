const StatusCodes = require('http-status-codes');
const {ForbiddenError, subject} = require('@casl/ability');
const UserService = require('./user.service');

class UserController {
    static async getAll(req, res, next) {
        try {
            ForbiddenError.from(req.ability).throwUnlessCan('read', 'User');
            const users = await UserService.getAll();
            users.forEach(user => ForbiddenError.from(req.ability).throwUnlessCan('read', subject('User', user)));

            res.status(StatusCodes.OK).json(users);
        } catch (error) {
            next(error);
        }
    }

    static async getOne(req, res, next) {
        try {
            ForbiddenError.from(req.ability).throwUnlessCan('read', 'User');
            const user = await UserService.getOne(req.params.userId);
            ForbiddenError.from(req.ability).throwUnlessCan('read', subject('User', user));

            res.status(StatusCodes.OK).json(user);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = UserController;