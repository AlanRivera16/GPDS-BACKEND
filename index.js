const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
const testRoute = require("./routes/test_router")
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use("/test", testRoute);

mongoose
  .connect(process.env['MONGODB_URI'])
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log({ error });
  });

app.get("/", (req, res) => {
    res.send({code: 200, message: "Hellow World"});
});

app.listen(process.env.PORT || 3000);
console.log('server up on port', (process.env.PORT || 3000))