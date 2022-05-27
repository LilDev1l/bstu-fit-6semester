const express = require('express');
const {PORT} = require('./common/config');
const jsonRpcRouter = require('express-json-rpc-router');
const controller = require('./contollers/controller');

const app = express()

app.use(express.json());
app.use(jsonRpcRouter({
    methods: controller,
}))

app.listen(PORT, () => console.info(`Server started on port ${PORT}`));