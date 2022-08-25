let express = require('express');
let app = express();

console.log("Hello World");

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
  });

app.use("/public", express.static(__dirname + "/public"))

require('dotenv').config()

app.get("/json", function(req, res) {
    if (process.env.MESSAGE_STYLE === "uppercase") {
        response = "Hello json".toUpperCase();
    } else {
        response = "Hello json";
    }
    res.json({"message": response});
  });


























 module.exports = app;
