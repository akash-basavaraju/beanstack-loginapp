const express = require("express");
const app = express();

app.use(express.static("build"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/build/index.html");
});

const server = app.listen(process.env.PORT || 5000, function () {
  var host = "localhost";
  var port = server.address().port;
  console.log("listening on http://" + host + ":" + port + "/");
});

module.exports = app;
