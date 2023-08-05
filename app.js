const express = require("express");
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const routes = require("./routes/routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(routes);


app.listen("3000", () => {
    console.log("Server started at Port 3000");
});