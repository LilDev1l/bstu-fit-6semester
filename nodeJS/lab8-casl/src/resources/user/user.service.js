const fastJson = require('fast-json-stringify');
const UserRepository = require('./user.repository');
const UserOptions = require('./user.options');

class UserService {
    static async getAll() {
        const stringify = fastJson(UserOptions.getAllUsersOpts.schema.response['200'])

        return JSON.parse(stringify(await UserRepository.getAll()));
    }

    static async getOne(id) {
        const stringify = fastJson(UserOptions.getOneUserOpts.schema.response['200'])

        return JSON.parse(stringify(await UserRepository.getOne(id) || {}));
    }

    static async getOneByUsername(username) {
        return await UserRepository.getOneByUsername(username) || {};
    }

    static async add(user) {
        const stringify = fastJson(UserOptions.postUserOpts.schema.response['201'])

        const newUser = await UserRepository.add(user);
        return JSON.parse(stringify(newUser || {}));
    }
}

module.exports = UserService;