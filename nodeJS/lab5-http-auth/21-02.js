const fs = require('fs');
const express = require('express');
const passport = require('passport');
const DigestStrategy = require('passport-http').DigestStrategy;
const {findUser} = require('./utils/auth');
const session = require('express-session')({
    resave: false,
    saveUninitialized: false,
    secret: '123456789'
});

passport.use(new DigestStrategy({qop: 'auth'},(username, done) => {
    const user = findUser(username);
    if (user) {
        return done(null, user, user.password);
    } else {
        return done(null, false, {message: 'incorrect username'});
    }
}));

const app = express();
app.use(session);
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.redirect('/login');
})

app.get('/login',
    (req, res, next) => {
        console.log('preAuth');
        if (req.session.logout && req.headers['authorization']) {
            req.session.logout = false;
            delete req.headers['authorization'];
        }
        next();
    },
    passport.authenticate('digest', {session: false}),
    (req, res) => {
        console.log('afterAuth');
        res.redirect('/resource');
    }
);

app.get('/resource',
    passport.authenticate('digest', {session: false}),
    (req, res) => {
        console.log('resource');
        fs.createReadStream('./static/index.html').pipe(res);
    })

app.get('/logout', (req, res) => {
    console.log('logout');
    req.session.logout = true;
    res.redirect('/login');
})

app.use((req, res, next) => {
    res.status(404).send('Not Found');
})

app.listen(process.env.PORT || 3000, () => console.info(`Server is running on http://localhost:${process.env.PORT || 3000}`));

