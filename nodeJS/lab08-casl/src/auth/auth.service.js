const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../common/config');
const UserService = require('../resources/user/user.service');

class AuthService {
    static async validateUser(username, password) {
        const user = await UserService.getOneByUsername(username);

        if (user?.password === password) {
            const {password, ...result} = user;
            return result;
        }
        return null;
    }

    static login(user) {
        const {id: sub, username, role} = user;
        const payload = {sub, username, role};

        return {
            accessToken: jwt.sign(payload, JWT_SECRET, {expiresIn: '24h'})
        };
    }

    static async register(user) {
        return UserService.add(user);
    }
}

module.exports = AuthService;