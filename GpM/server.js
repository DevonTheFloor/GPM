const http = require('http');
const app = require('./app');

app.set('port',process.env.PORT || 3030);
const server = http.createServer(app);
console.log("Groupomania dispo http://localhost:3030");

server.listen(process.env.PORT || 3030);