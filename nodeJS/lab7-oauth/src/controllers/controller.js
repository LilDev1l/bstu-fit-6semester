const path = require('path');

class Controller {
    static login(req, res) {
        res.sendFile(path.join(__dirname, '../views/login.html'));
    }

    static authGoogleCallback(req, res) {
        res.redirect('/resource');
    }

    static logout(req, res) {
        req.logout();
        res.redirect('/login');
    }

    static resource(req, res) {
        console.log(`User ${req.user.profile.displayName} (id: ${req.user.profile.id})`);
        res.sendFile(path.join(__dirname, '../views/resource.html'));
    }
}

module.exports = Controller;
