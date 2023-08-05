const express = require("express");
const routes = express.Router();
const controllers = require("../controllers/home");


routes.get("/" , (req,res) => {
    res.render("home");
}).post("/" , controllers.homeController );

module.exports = routes;