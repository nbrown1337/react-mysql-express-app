// simple node web server that displays hello world

const express = require("express");

const database = require("./database");

// Appi
const app = express();

app.get("/", function(req, res, next) {
  database.raw('select VERSION() version')
    .then(([rows, columns]) => rows[0])
    .then((row) => res.json({ message: `Hello from MySQL ${row.version} & ExpressJS` }))
    .catch(next);
});

module.exports = app;
