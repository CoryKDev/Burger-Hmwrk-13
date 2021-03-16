const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./contollers/burgers_controller")
const router = express.Router();
const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(routes);