const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.join(__dirname, '../../.env')
});

module.exports = {
    PORT: process.env.PORT || 3000,
    JWT_SECRET: process.env.JWT_SECRET,

    mySqlConfig: {
        database: 'lab8_casl',
        username: 'root',
        password: 'root',
        option: {
            host: 'localhost',
            dialect: 'mysql'
        }
    }
}