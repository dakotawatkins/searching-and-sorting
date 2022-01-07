/**
 * Return the nth fibonacci number
 * @param {integer} n
 */
function fibonacci(n) {
  // base case
  if (n <= 1) {
    return n;
  }

  // recursion
  return fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = fibonacci;
