const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
};

const isEven = (n) => {
  if (n % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

const isPerfect = (n) => {
  if (n <= 0) {
    return false;
  }

  for (let i = 1; i * i <= n; i++) {
    if (i * i == n) {
      return true;
    }
  }
  return false;
};

const digit_sum = (n) => {
  let sum = 0;
  for (; n > 0; n = Math.floor(n / 10)) {
    sum += n % 10;
  }
  return sum;
};

const armstrong = (n) => {
  let sum = 0;
  let value = n;
  while (value > 0) {
    let result = value % 10;
    sum += result * result * result;
    value = parseInt(value / 10);
  }
  if (sum == n) {
    return "armstrong";
  } else {
    return "not an armstrong";
  }
};

module.exports = { isPrime, isPerfect, digit_sum, armstrong, isEven };
