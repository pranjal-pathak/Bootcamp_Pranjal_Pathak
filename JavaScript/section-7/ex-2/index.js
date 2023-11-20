const fs = require("fs");
const YAML = require("js-yaml");

class Chessboard {
  constructor() {
    // Unicode symbols for chess pieces
    this.symbols = {
      K: "♔",
      Q: "♕",
      R: "♖",
      B: "♗",
      N: "♘",
      P: "♙",
      k: "♚",
      q: "♛",
      r: "♜",
      b: "♝",
      n: "♞",
      p: "♟",
    };

    // Initialize the chessboard with default settings
    this.board = [
      ["r", "n", "b", "q", "k", "b", "n", "r"],
      ["p", "p", "p", "p", "p", "p", "p", "p"],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      ["P", "P", "P", "P", "P", "P", "P", "P"],
      ["R", "N", "B", "Q", "K", "B", "N", "R"],
    ];
  }

  printBoard() {
    const horizontalSeparator = "+---+---+---+---+---+---+---+---+";

    console.log("   a   b   c   d   e   f   g   h");
    console.log(horizontalSeparator);

    for (let i = 0; i < this.board.length; i++) {
      const row = this.board[i];
      const rowString = row
        .map((piece) => ` ${this.symbols[piece] || piece} `)
        .join("|");
      const rowWithSeparator = ` ${8 - i} |${rowString} |`;

      console.log(horizontalSeparator);
      console.log(rowWithSeparator);
    }

    console.log(horizontalSeparator);
    console.log("\n");
  }

  movePiece(startRow, startCol, endRow, endCol) {
    const piece = this.board[startRow][startCol];
    this.board[endRow][endCol] = piece;
    this.board[startRow][startCol] = " ";
  }

  killPiece(row, col) {
    this.board[row][col] = " ";
  }

  saveToFile(filename) {
    const data = YAML.dump({ board: this.board });
    fs.writeFileSync(filename, data, "utf8");
    console.log(`Chessboard saved to ${filename}`);
  }

  loadFromFile(filename) {
    const data = fs.readFileSync(filename, "utf8");
    const parsedData = YAML.load(data);
    this.board = parsedData.board;
    console.log(`Chessboard loaded from ${filename}`);
  }
}

// Example usage
const chessboard = new Chessboard();

console.log("Initial Chessboard:");
chessboard.printBoard();

console.log("Moving a piece:");
chessboard.movePiece(6, 4, 4, 4); // Move a pawn
chessboard.printBoard();

console.log("Killing a piece:");
chessboard.killPiece(7, 1); // Kill a knight
chessboard.printBoard();

console.log("Saving to file:");
chessboard.saveToFile("chessboard.yaml");

console.log("Loading from file:");
const newChessboard = new Chessboard();
newChessboard.loadFromFile("chessboard.yaml");
newChessboard.printBoard();
