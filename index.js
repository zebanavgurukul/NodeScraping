const express = require('express');
var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json())

const Api = require("./routes/Api")
app.use("/Api",Api)

app.listen('8000')
console.log('Listening on localhost:8000/scrape')
exports = module.exports = app;