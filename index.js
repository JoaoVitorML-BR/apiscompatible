var bodyParser = require('body-parser');
var express = require("express");
var app = express();
var router = require("./routes/routes");
var cors = require('cors');
// var HomeController = require('./controllers/HomeController');

app.use(cors());
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use("/",router);

app.listen(1952,() => {
    console.log("Servidor rodando na rota: http://localhost:1952");
});

