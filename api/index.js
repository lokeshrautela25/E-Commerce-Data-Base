const db = require("json-server");
const server = db.create();
const router = db.router("db.json");
const middlewares = db.defaults();
const port =  3000;

server.use(middlewares);
server.use(router);
server.listen(port);
