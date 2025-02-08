const {
  isPerfect,
  isPrime,
  digit_sum,
  armstrong,
  isEven,
} = require("../utilis/maths");
const axios = require("axios");

const numClassificationApi = async (req, res) => {
  try {
    const { number } = req.query;
    if (typeof number !== "string" || isNaN(Number(number))) {
      return res.status(400).json({
        number: "alphabet",
        error: true,
      });
    }

    const property = [];

    if (armstrong(n) && isEven(n)) {
      property.push(["armstrong", "even"]);
    } else if (armstrong(n) && !isEven(n)) {
      property.push(["armstrong", "odd"]);
    } else if (!armstrong(n) && !isEven(n)) {
      property.push(["odd"]);
    } else if (!armstrong(n) && isEven(n)) {
      property.push(["even"]);
    }
    const plain_text = await axios.get(`http://numbersapi.com/${number}`);

    const data = {
      number: `${number}`,
      is_prime: `${isPrime(number)}`,
      is_perfect: `${isPerfect(number)}`,
      properties: property,
      digit_sum: `${digit_sum(number)}`, // sum of its digits
      fun_fact: `${plain_text.data}`,
    };
    console.log(data);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      massage: `${error.details[0].message}`,
    });
  }
};

module.exports = numClassificationApi;
