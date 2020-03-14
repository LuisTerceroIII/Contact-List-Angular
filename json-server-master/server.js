//import { db } from '../ContactList/jsC:/Users/Luis/Desktop/Programming/SPA/ContactList/json-server-master/db';
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);
//Hasta aqui lowdb para poder realizar metodo post, put, patch y delete
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
//Apertura de jsonServer

//Filtro para usar json.
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});
server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running on port 3000");
});

server.post("/contact", (req, res) => {
  console.log("Entro a post");

  db.get("post")
    .push(req.body)
    .write();

  console.log(req.body);

  res.status(200).jsonp({
    message: "The post was success"
  });
});
