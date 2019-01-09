const Coordinate = require("./coordinate");
const { alphabet } = require("./util");

class Board {
  constructor(size, isRobotBoard = false) {
    this.create(size);
    // If it is a robot board, we will not display where the ships reside when the player views that board.
    this.isRobotBoard = isRobotBoard;
  }

  // The robot uses this when placing his ships on the board
  get availableCoordinates() {
    return [...this.coordinates]
      .map(([k, v]) => !v.hasShip && k)
      .filter(Boolean);
  }

  // The robot uses this when firing upon the ships
  get targets() {
    return [...this.coordinates]
      .map(([k, v]) => !v.shotAttempted && k)
      .filter(Boolean);
  }

  // Make a board with the dimensions specified
  create(size) {
    this.coordinates = new Map();
    let i = -1;
    while (i++ < size - 1) {
      let y = -1;
      while (y++ < size - 1) {
        const x = alphabet[i];
        this.coordinates.set(`${x}${y}`, new Coordinate(x, y));
      }
    }
  }

  fire(xy) {
    // Make sure the coordinate is valid.
    if (!this.coordinates.has(xy)) {
      console.warn(
        `You seem to have missed the board because "${xy}"" is out of bounds.`
      );
    } else {
      const coordinate = this.coordinates.get(xy);
      const whoFiredShot = this.isRobotBoard ? "Player" : "Robot";
      console.log(`${whoFiredShot} fired a shot at "${xy}".`);
      coordinate.hit();
    }
  }

  print(possibilities = []) {
    let currentRow = null;
    let row = "\n";
    for (let [k, v] of this.coordinates.entries()) {
      let [a] = k;

      if (currentRow !== a) {
        currentRow = a;
        row = `${row} \n`;
      }

      if (v.isHit) {
        row = `${row} 🔥 `;
      } else if (v.shotAttempted) {
        row = `${row} 🚫 `;
      } else if (!this.isRobotBoard && v.hasShip) {
        row = `${row} ⛵ `;
      } else if (!this.isRobotBoard && possibilities.includes(k)) {
        row = `${row} ✅ `;
      } else {
        row = `${row} ${k} `;
      }
    }
    row = `${row} \n\n`;

    console.log(row);
  }
}

module.exports = Board;
