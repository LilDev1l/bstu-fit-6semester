const LocalStrategy = require('passport-local').Strategy;
const AuthService = require('./auth.service');

const strategy = new LocalStrategy(async (username, password, done) => {
    const user = await AuthService.validateUser(username, password);
    if (!user) {
        return done(null, false, {message: 'invalid username or password'});
    }
    return done(null, user);
});

module.exports = strategy;
