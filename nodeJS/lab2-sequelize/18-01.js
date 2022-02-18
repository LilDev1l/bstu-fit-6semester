const fastify = require('fastify');
const fs = require('fs');
const {PORT} = require('./common/config');
const server = fastify();

server.get('/', (req, reply) => {
    fs.createReadStream('./static/index.html').pipe(reply.raw);
});

server.register(require('./resources/faculty/faculty.router'), { prefix: '/api/faculties' });
server.register(require('./resources/pulpit/pulpit.router'), { prefix: '/api/pulpits' });
server.register(require('./resources/subject/subject.router'), { prefix: '/api/subjects' });
server.register(require('./resources/teacher/teacher.router'), { prefix: '/api/teachers' });
server.register(require('./resources/auditorium/auditorium.router'), { prefix: '/api/auditoriums' });

server.listen(PORT, () => console.info(`Server is running on http://localhost:${PORT}`));