const StatusCodes = require('http-status-codes');
const {ForbiddenError} = require('@casl/ability');
const {ValidationError} = require('express-json-validator-middleware');

function handlerErrorMiddleware(error, request, response, next) {
    if (response.headersSent) {
        return next(error);
    }

    switch (true) {
        case error instanceof ValidationError:
            response.status(StatusCodes.BAD_REQUEST).json({
                errors: error.validationErrors,
            });
            break;
        case error instanceof ForbiddenError:
            response.status(StatusCodes.FORBIDDEN).json({
                message: error.message,
            });
            break;
        default:
            console.log('message:', error.message);
            console.log('stack trace:', error.stack);
            response.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}

module.exports = handlerErrorMiddleware;

