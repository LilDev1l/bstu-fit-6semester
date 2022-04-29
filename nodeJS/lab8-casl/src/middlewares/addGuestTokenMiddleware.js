function addGuestTokenMiddleware(req, res, next) {
    if (!req.headers.authorization) {
        req.headers.authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiR1VFU1QiLCJpYXQiOjE2NTA3ODg5MjcsImV4cCI6MTg5NTQ0MzIwMH0.xrZ9D9pTVh8viowb2YNzD0enjfQaVOnLiSeOpJuWWzc'
    }

    next();
}

module.exports = addGuestTokenMiddleware;