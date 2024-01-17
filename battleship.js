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
      }
      return;
    }
    case "west": {
      if (x - 3 >= 0) {
        for (let i = 0; i < 4; i++) {
          if (chessBoard[y][x - i] === 1) {
            return false;
          }
          chessBoard[y][x - i] = 1;
        }
      }
      return;
    }
    case "south": {
      if (y + 3 <= 6) {
        for (let i = 0; i < 4; i++) {
          if (chessBoard[y + i][x] === 1) {
            return false;
          }
          chessBoard[y + i][x] = 1;
        }
      }
      return;
    }
    case "north": {
      if (y - 3 >= 0) {
        for (let i = 0; i < 4; i++) {
          if (chessBoard[y - i][x] === 1) {
            return false;
          }
          chessBoard[y - i][x] = 1;
        }
      }
      return;
    }
  }
};

console.log("initial: ", chessBoard);

placeShip([3, 2], "east");
placeShip([7, 1], "west");
placeShip([0, 3], "north");
placeShip([1, 3], "south");

console.log("After place ships: ", chessBoard);
