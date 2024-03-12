const originalArr = [9, 1, 2, 2, 3, 4, 2, 4, 8, 1, 9];

function removeDuplicate(array) {
  let cache = {};
  const answer = [];

  array.forEach((element) => {
    if (cache[element]) {
      return;
    }

    answer.push(element);
    cache[element] = true;
  });

  return answer;
}

const ans = removeDuplicate(originalArr);
console.log(ans); // [9,1,2,3,4,8]
