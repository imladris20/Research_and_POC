function ArrayChallenge(arr) {
  if (arr.length === 0) return -1;
  const maxIndex = arr.indexOf(Math.max(...arr));
  console.log("maxIndex: ", maxIndex);
  const minIndex = arr.indexOf(Math.min(...arr));
  console.log("minIndex: ", minIndex);

  if (maxIndex === 0 && minIndex + 1 === arr.length) return -1;
  if (minIndex === 0 && maxIndex + 1 === arr.length) return -1;
  // code goes here

  console.log(Math.min(maxIndex, minIndex));
  return Math.min(maxIndex, minIndex);
}

console.log(ArrayChallenge([1, 2, 4, 6, 4, 3, 1]));
