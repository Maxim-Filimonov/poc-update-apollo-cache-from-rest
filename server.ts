import jsonServer from "json-server";
import jsonGraphqlExpress from "json-graphql-server";

import data from "./db";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use("/graphql", jsonGraphqlExpress(data));

server.use(router);
server.listen(3000, () => {
  console.log("JSON Servers are running");
});
