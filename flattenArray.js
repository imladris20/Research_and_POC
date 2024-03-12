let array = [1, 2, [3, [4, 5, [6, 7, [8]]]]];

const flattenArray = (arr) => {
  const flattened = arr.reduce((finalArr, element) => {
    if (Array.isArray(element)) {
      return [...finalArr, ...flattenArray(element)];
    } else {
      return [...finalArr, element];
    }
  }, []);
  return flattened;
};

console.log(flattenArray(array));

const flattenArrayTwo = (arr) => {
  let flattened = [];

  for (const element of arr) {
    if (Array.isArray(element)) {
      flattened = [...flattened, ...flattenArrayTwo(element)];
    } else {
      flattened = [...flattened, element];
    }
  }
  return flattened;
};

console.log(flattenArrayTwo(array));
