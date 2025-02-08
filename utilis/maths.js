class NumberClassification {
  armstrong(n) {
    let value = n;
    let sum = 0;
    while (value > 0) {
      let result = value % 10;
      sum += result * result * result;
      value = parseInt(value / 10);
    }
    if (sum == n) {
      return true;
    } else {
      return false;
    }
  }
  digit_sum(n) {
    let sum = 0;
    for (; n > 0; n = Math.floor(n / 10)) {
      sum += n % 10;
    }
    return sum;
  }
  isPerfect(n) {
    if (n <= 0) {
      return false;
    }

    for (let i = 1; i * i <= n; i++) {
      if (i * i == n) {
        return true;
      }
    }
    return false;
  }
  isEven(n) {
    if (n % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  isPrime(n) {
    if (n <= 1) {
      return false;
    }

    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  }

  property(n) {
    if (this.armstrong(n) == true && this.isEven(n) == "Even") {
      let properties = ["armstrong", "even"];
      return;
    } else if (this.armstrong(n) == true && this.isEven(n) == "Odd") {
      let properties = ["armstrong", "odd"];
      return properties;
    } else if (this.armstrong(n) == false && this.isEven(n) == "Even") {
      return ["even"];
    } else {
      return ["odd"];
    }
  }
}

module.exports = { NumberClassification };
