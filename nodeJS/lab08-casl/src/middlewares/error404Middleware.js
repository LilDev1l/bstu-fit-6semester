function error404Middleware(req, res) {
    res.status(404).json();
}

module.exports = error404Middleware;