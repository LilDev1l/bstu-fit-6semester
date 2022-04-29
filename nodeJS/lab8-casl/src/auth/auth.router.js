const {Router} = require('express');
const { Validator } = require('express-json-validator-middleware');
const passport = require('passport');
const AuthController = require('./auth.controller');
const UserOptions = require('../resources/user/user.options');

const router = Router();
const {validate} = new Validator({ coerceTypes: true });

router.post('/register', validate(UserOptions.postUserOpts), AuthController.register);

router.post('/login',
    validate(UserOptions.loginUserOpts),
    passport.authenticate('local', {session: false}),
    AuthController.login);

router.get('/logout');

module.exports = router;