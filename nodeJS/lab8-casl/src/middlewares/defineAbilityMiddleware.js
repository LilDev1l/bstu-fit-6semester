const defineAbilityFor = require('../ability/defineAbility');

async function defineAbilityMiddleware(req, res, next) {
    req.ability = await defineAbilityFor(req.user);

    next();
}

module.exports = defineAbilityMiddleware;