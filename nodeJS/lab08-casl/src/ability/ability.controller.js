const StatusCodes = require('http-status-codes');

class AbilityController {
    static getAll(req, res) {
        res.status(StatusCodes.OK).json(req.ability.rules);
    }
}

module.exports = AbilityController;