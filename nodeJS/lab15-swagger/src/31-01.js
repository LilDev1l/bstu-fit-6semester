const path = require('path');
const express = require('express');
const swaggerUI = require('swagger-ui-express');
const contactRoutes = require('./routers/contactRouter');
const yaml = require('yamljs');
const {PORT} = require('./common/config');

const swaggerDocument = yaml.load(path.join(__dirname, './doc/api.yaml'));

const app = express();

app.use(express.json())
    .use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
    .use('/ts', contactRoutes);

app.listen(PORT, () => console.info(`Server is running on http://localhost:${PORT}`));

