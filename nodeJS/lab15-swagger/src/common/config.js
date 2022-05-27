const path = require('path');
const dotenv = require('dotenv');

dotenv.config({path: path.resolve('..', '.env')});

module.exports = {
    PORT: process.env.PORT ?? 3000
}