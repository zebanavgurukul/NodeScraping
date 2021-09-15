const express = require('express');
var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json())

const Api = require("./routes/Scraping")
app.use("/api",Api)

app.listen(8000, () => {
    console.log("server is listening 8000.........")
});