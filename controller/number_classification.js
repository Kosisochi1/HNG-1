const { NumberClassification } = require("../utilis/maths");
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

    // console.log(armstrong(number));

    const pro = new NumberClassification();

    const plain_text = await axios.get(`http://numbersapi.com/${number}`);

    const data = {
      number: `${number}`,
      is_prime: `${pro.isPrime(number)}`,
      is_perfect: `${pro.isPerfect(number)}`,
      properties: `${pro.property(number)}`,
      digit_sum: `${pro.digit_sum(number)}`, // sum of its digits
      fun_fact: `${plain_text.data}`,
    };
    // console.log(data);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      massage: `${error.details}`,
    });
  }
};

module.exports = numClassificationApi;
