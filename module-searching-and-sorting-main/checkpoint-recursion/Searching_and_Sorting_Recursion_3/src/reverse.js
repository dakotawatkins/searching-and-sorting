/**
 * Returns the string with the characters in reverse order
 * @param {string} text the string to be reversed
 */
function reverse(text) {
  // base case
  if (text === "") return "";

  // resursion
  const splitText = text.split("");
  const reversedArray = splitText.reverse();
  const reversedText = reversedArray.join("");

  return reversedText;
}

console.log(reverse("reilly"));

module.exports = reverse;
