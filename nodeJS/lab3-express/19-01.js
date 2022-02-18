const express = require('express');
const {PORT} = require('./common/config');
const facultyRoutes = require('./resources/faculty/faculty.router');
const pulpitRoutes = require('./resources/pulpit/pulpit.router');
const auditoriumRoutes = require('./resources/auditorium/auditorium.router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/faculties', facultyRoutes);
app.use('/api/pulpits', pulpitRoutes);
app.use('/api/auditoriums', auditoriumRoutes);

app.listen(PORT, () => console.info(`Server is running on http://localhost:${PORT}`));