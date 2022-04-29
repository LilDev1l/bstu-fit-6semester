const express = require('express');
const passport = require('passport');
const authRoutes = require('./auth/auth.router');
const userRoutes = require('./resources/user/user.router');
const repositoryRoutes = require('./resources/repository/repository.router');
const localStrategy = require('./auth/local.strategy');
const jwtStrategy = require('./auth/jwt.strategy');
const {addGuestTokenMiddleware, defineAbilityMiddleware, error404Middleware, handlerErrorMiddleware} = require('./middlewares/index');
const {PORT} = require('./common/config');
const AbilityController = require('./ability/ability.controller');

passport.use(localStrategy);
passport.use(jwtStrategy);

const app = express();

app.use(express.json());

app.use('/auth', authRoutes);

app.use(addGuestTokenMiddleware);
app.use(passport.authenticate('jwt', {session: false}));
app.use(defineAbilityMiddleware);

app.get('/api/abilities', AbilityController.getAll)
app.use('/api/users', userRoutes);
app.use('/api/repositories', repositoryRoutes);

app.use(error404Middleware);
app.use(handlerErrorMiddleware);

app.listen(PORT, () => console.info(`Server running on port ${PORT}`));





