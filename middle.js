function middle(array) {
  const length = array.length;

  if (length <= 2) {
    return [];
  }

  if (length % 2 === 1) { // Odd number of elements
    const middleIndex = Math.floor(length / 2);
    return [array[middleIndex]];
  } else { // Even number of elements
    const middleIndex1 = length / 2 - 1;
    const middleIndex2 = length / 2;
    return [array[middleIndex1], array[middleIndex2]];
  }
}

module.exports = middle;