const express = require("express");
const app = express();
const server = require("http").createServer(app);

server.listen(1337);

app.use(express.static(__dirname + "/../client/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/../client/public/index.html");
});