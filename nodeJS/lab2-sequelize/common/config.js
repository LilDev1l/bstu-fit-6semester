module.exports = {
    PORT: 3000,
    msConfig: {
        database: 'nodeJS_university',
        username: 'user',
        password: 'user',
        option: {
            host: 'localhost',
            dialect: 'mssql',
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            }
        }
    }
};
