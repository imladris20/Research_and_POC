function StringChallenge(str) {
  const num = parseFloat(str);
  console.log(num);
  const full = Math.floor(num);
  console.log(full);
  const half = num - full > 0 ? 1 : 0;
  const empty = 5 - full - half;

  const status = [];

  for (let i = 0; i < full; i++) {
    status.push("full");
  }
  if (half === 1) {
    status.push("half");
  }
  for (let i = 0; i < empty; i++) {
    status.push("empty");
  }

  return status.join(" ");
}

console.log("2.36 => ", StringChallenge("2.36"));
console.log("0.38 => ", StringChallenge("0.38"));
console.log("4.5 => ", StringChallenge("4.5"));
console.log("0.0 => ", StringChallenge("0.0"));
console.log("5.0 => ", StringChallenge("5.0"));
console.log("3.02 => ", StringChallenge("3.02"));
