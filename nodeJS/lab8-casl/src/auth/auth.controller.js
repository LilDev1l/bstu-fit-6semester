const StatusCodes = require('http-status-codes');
const AuthService = require('./auth.service');

class AuthController {
    static login(req, res) {
        const auth = AuthService.login(req.user);

        res.status(StatusCodes.CREATED).json(auth);
    }

    static async register(req, res) {
        const user = await AuthService.register(req.body);

        res.status(StatusCodes.CREATED).json(user);
    }
}

module.exports = AuthController;