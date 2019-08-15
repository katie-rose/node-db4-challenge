const express = require("express");
const server = express();

const recipeRouter = require("../routers/recipeRouter");

server.use(express.json());

server.use("/api/recipes", recipeRouter);

module.exports = server;
