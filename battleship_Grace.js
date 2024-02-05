const chessBoard = [...Array(7)].map((_, i) => [...Array(8).fill(0)]);

function placeShip(x, y, dir) {
  if (dir === "e") {
    if (x > 4) {
      return false;
    }

    for (let i = x; i < x + 4; i++) {
      chessBoard[i][y] = 1;
      console.log("haha");
    }
  } else if (dir === "w") {
    if (x < 3) {
      return false;
    }
    for (let i = x; i > x - 4; i--) {
      chessBoard[i][y] = 1;
    }
  } else if (dir === "s") {
    if (y > 5) {
      return false;
    }

    for (let i = y; i < y + 4; i++) {
      chessBoard[x][i] = 1;
    }
  } else if (dir === "n") {
    if (y < 3) {
      return false;
    }

    for (let i = y; i > y - 4; i--) {
      chessBoard[x][i] = 1;
    }
  }
}

placeShip(4, 4, "e");

console.log("After place ships: ", chessBoard);
