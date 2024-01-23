const chessBoard = [...Array(7)].map((_, i) => [...Array(8).fill(0)]);

const placeShip = (index, direction) => {
  const [x, y] = index;

  if (chessBoard[y][x] === 1) {
    return;
  }

  switch (direction) {
    case "east": {
      if (x + 3 <= 7) {
        for (let i = 0; i < 4; i++) {
          if (chessBoard[y][x + i] === 1) {
            return false;
          }
          chessBoard[y][x + i] = 1;
        }
        return true;
      }
      return false;
    }
    case "west": {
      if (x - 3 >= 0) {
        for (let i = 0; i < 4; i++) {
          if (chessBoard[y][x - i] === 1) {
            return false;
          }
          chessBoard[y][x - i] = 1;
        }
        return true;
      }
      return false;
    }
    case "south": {
      if (y + 3 <= 6) {
        for (let i = 0; i < 4; i++) {
          if (chessBoard[y + i][x] === 1) {
            return false;
          }
          chessBoard[y + i][x] = 1;
        }
        return true;
      }
      return false;
    }
    case "north": {
      if (y - 3 >= 0) {
        for (let i = 0; i < 4; i++) {
          if (chessBoard[y - i][x] === 1) {
            return false;
          }
          chessBoard[y - i][x] = 1;
        }
        return true;
      }
      return false;
    }
  }
};

console.log("initial: ", chessBoard);

if (!placeShip([3, 2], "east")) {
  console.log("Failed to place ship at [3, 2]");
}
if (!placeShip([7, 1], "west")) {
  console.log("Failed to place ship at [7, 1]");
}
if (!placeShip([0, 3], "north")) {
  console.log("Failed to place ship at [0, 3]");
}
if (!placeShip([1, 3], "south")) {
  console.log("Failed to place ship at [1, 3]");
}

console.log("After place ships: ", chessBoard);
