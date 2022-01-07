/**
 * Return base raised to the power exponent.
 * @throws Error if exponent is negative
 * @param {integer} base an integer
 * @param {integer} exponent a non-negative integer
 */

// takes integer as base + non-negative integer as exponent
function power(base, exponent) {
  // base case
  if (exponent < 0) throw "exponent should be >= 0";
  console.log("base case", exponent);

  // recursive case
  let value = Math.pow(base, exponent);
  return value;
}

console.log(power(10, 3));

module.exports = power;
