const express = require("express");
const axios = require("axios");
const numClassificationApi = require("./controller/number_classification");
const cors = require("cors");
const { NumberClassification } = require("./utilis/maths");
require("dotenv").config();

const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());
// app.use("/", route);

app.get("/", async (req, res) => {
  try {
    return res.status(200).json({ massage: "Welcome" });
  } catch (error) {
    return res.status(500).json({ massage: `${error.details[0].message}` });
  }
});
// api/classify-number?number=371
app.get("/api/classify-number", async (req, res) => {
  try {
    const { number } = req.query;

    if (number == null || !number) {
      return res.status(200).json({
        number: 0,
        is_prime: false,
        is_perfect: false,
        properties: "null",
        digit_sum: 9,
        fun_fact: "Zero",
      });
    }
    if (typeof number !== "string" || isNaN(Number(number))) {
      return res.status(400).json({
        number: "alphabet",
        error: true,
      });
    }

    if (number < 0) {
      return res.status(400).json({ number: "Negative Integer", error: true });
    }

    const math = new NumberClassification();
    let n1 = +number;

    const plain_text = await axios.get(`http://numbersapi.com/${number}/math`);
    let fun_fat = null;

    if (plain_text) {
      fun_fat = plain_text.data;
      console.log(fun_fat);
    }

    const data = {
      number: n1,
      is_prime: math.isPrime(number),
      is_perfect: math.isPerfect(number),
      properties: math.property(number),
      digit_sum: math.digit_sum(number), // sum of its digits
      fun_fact: fun_fat,
    };

    res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      number: `${error.details}`,
      error: true,
    });
  }
});

app.get("*", (req, res) => {
  return res.status(400).json({
    number: "Bad Request ",
    error: true,
  });
});

app.listen(port, () => {
  console.log("Server Started");
});
