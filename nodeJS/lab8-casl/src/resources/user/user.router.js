const {Router} = require('express');
const { Validator } = require('express-json-validator-middleware');
const UserController = require('./user.controller');
const UserOptions = require('../user/user.options');

const router = Router();
const {validate} = new Validator({ coerceTypes: true });

router.get('/', UserController.getAll);
router.get('/:userId', validate(UserOptions.getOneUserOpts.schema), UserController.getOne);

module.exports = router;