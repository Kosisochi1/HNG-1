const express = require("express");
const axios = require("axios");
const numClassificationApi = require("./controller/number_classification");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());
// app.use("/", route);

// api/classify-number?number=371
app.get("/api/classify-number", numClassificationApi);

app.get("*", (req, res) => {
  return res.status(400).json({
    massage: "Bad Request ",
  });
});

app.listen(port, () => {
  console.log("Server Started");
});
