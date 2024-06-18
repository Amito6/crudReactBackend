const dotenv = require("dotenv").config();
const express = require("express");
const server = express();
server.listen(8080);

// enable body parser
const bodyParser = require("body-parser");
const urlEncoded = bodyParser.urlencoded({extended : false});
const jsonEncoded = bodyParser.json();
server.use(urlEncoded);
server.use(jsonEncoded);

// enable cors
const cors = require("cors");
server.use(cors());

// route level middleware
const registerRouter = require("./routes/regsiter.routes");

server.use("/",registerRouter);
server.use("/register",registerRouter);
