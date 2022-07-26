const express = require("express");
const bodyParser = require("body-parser");
const routesHandler = require("./routes/handler.js");

require("dotenv/config");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(4001, function () {
  console.log("Running... ");
});

app.use("/", routesHandler);

// app.get("/products", function (req, res) {
//   res.send("Hello world");
// });
