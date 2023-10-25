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

