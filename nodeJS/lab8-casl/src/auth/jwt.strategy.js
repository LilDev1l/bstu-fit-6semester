const {ExtractJwt, Strategy} = require('passport-jwt');
const {JWT_SECRET} = require('../common/config');

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    ignoreExpiration: false,
    secretOrKey: JWT_SECRET
}

const strategy = new Strategy(opts, (payload, done) => {
    const {sub: id, username, role} = payload;
    const user = {id, username, role};

    done(null, user);
});

module.exports = strategy;