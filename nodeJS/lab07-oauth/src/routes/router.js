const {Router} = require('express');
const passport = require('passport');
const secured = require('../middlewares/secured');
const Controller = require('../controllers/controller');


const router = Router();

router.get('/', (req, res) => {
    res.redirect('/login');
});

router.get('/login', Controller.login);

// client перенаправляем resource owner к authorization server с параметрами client_id и scope
router.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));
// authorization server перенаправляет resource owner к client с параметрами code и scope
// после чего client сам делает post-запрос к authorization server с парметрами client_id, client_secret и code
router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), Controller.authGoogleCallback);

router.get('/logout', Controller.logout);
router.get('/resource', secured, Controller.resource);

module.exports = router;