function without(source, itemsToRemove) {
  const result = [];
  for (const element of source) {
    if (!itemsToRemove.includes(element)) {
      result.push(element);
    }
  }

  return result;
}

module.exports = without; 

// console.log(without([1, 2, "apple",  3], [1])) // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2