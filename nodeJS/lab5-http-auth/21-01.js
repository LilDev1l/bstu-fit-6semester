const fs = require('fs');
const express = require('express');
const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const {verifyUser} = require('./utils/auth');
const session = require('express-session')({
    resave: false,
    saveUninitialized: false,
    secret: '123456789'
});

passport.use(new BasicStrategy((username, password, done) => {
    if (!verifyUser(username, password)) {
        return done(null, false, {message: 'incorrect username or password'});
    }

    return done(null, username);
}));
passport.serializeUser((username, done) => {
    console.log('serialize: ', username);
    done(null, username);
});
passport.deserializeUser((username, done) => {
    console.log('deserialize: ', username);
    done(null, username);
})

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
    passport.authenticate('basic'),
    (req, res) => {
        console.log('afterAuth');
        res.redirect('/resource');
    }
);

app.get('/resource',
    passport.authenticate('basic'),
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

