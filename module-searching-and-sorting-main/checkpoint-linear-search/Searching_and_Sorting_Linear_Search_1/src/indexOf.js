// instructions:
// implement a linear search algorithm 

function indexOf(isMatch, elements) {
  if (Array.isArray(elements)) {
    for (let index = 0, length = elements.length; index < length; index++) {
      if (isMatch(elements[index], index, elements)) {
        return index;
      }
    }
  }
  return -1;
}

module.exports = indexOf;

// returns -1 when array is null
// returns -1 when array is empty
// returns 0 when the first element matches
// returns 1 when second element matches
