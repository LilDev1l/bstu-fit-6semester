const error404Middleware = require('./error404Middleware');
const handlerErrorMiddleware = require('./handlerErrorMiddleware');
const addGuestTokenMiddleware = require('./addGuestTokenMiddleware');
const defineAbilityMiddleware = require('./defineAbilityMiddleware');

module.exports = {
    addGuestTokenMiddleware,
    defineAbilityMiddleware,
    error404Middleware,
    handlerErrorMiddleware,
}