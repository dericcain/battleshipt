const {
  alphabet,
  splitCoordinates,
  getPossibleCoordinates
} = require("./util");

class Ship {
  constructor(board, size = 3) {
    this.board = board;
    this.size = size;
    this.coordinates = [];
  }

  get potentialCoordinates() {
    const [startX, startY] = splitCoordinates(this.startCoord);
    const xIndex = alphabet.indexOf(startX);

    // This is the on the x-axis moving in the positive direction (left)
    const xPositive = alphabet[xIndex - this.size + 1];
    // This is the on the x-axis moving in the negative direction (right)
    const xNegative = alphabet[xIndex + this.size - 1];

    // This is the on the y-axis moving in the positive direction (up)
    const yPositive = Number(startY) - this.size + 1;
    // This is the on the y-axis moving in the negative direction (down)
    const yNegative = Number(startY) + this.size - 1;

    // Build up an object here so we can see if any ships are already in the path of
    // where we want to place another ship.
    const possibilities = [
      {
        endCoord: `${xPositive}${startY}`,
        coords: getPossibleCoordinates(
          this.startCoord,
          `${xPositive}${startY}`,
          false
        )
      },
      {
        endCoord: `${xNegative}${startY}`,
        coords: getPossibleCoordinates(
          this.startCoord,
          `${xNegative}${startY}`,
          false
        )
      },
      {
        endCoord: `${startX}${yPositive}`,
        coords: getPossibleCoordinates(
          this.startCoord,
          `${startX}${yPositive}`,
          false
        )
      },
      {
        endCoord: `${startX}${yNegative}`,
        coords: getPossibleCoordinates(
          this.startCoord,
          `${startX}${yNegative}`,
          false
        )
      }
    ].filter(({ endCoord }) => this.board.coordinates.has(endCoord));

    // Is there a ship in the path of where we could potentially place our ship?
    return possibilities.map(({ endCoord, coords }) => {
      if (!coords.some(c => this.board.coordinates.get(c).hasShip)) {
        return endCoord;
      }
    });
  }

  get isSunk() {
    return this.coordinates.filter(coord => !coord.isHit).length === 0;
  }

  coordinateExists(coord) {
    return Boolean(this.coordinates.find(({ x, y }) => `${x}${y}` === coord));
  }

  placeStartCoordinate(coord) {
    if (this.startCoord) {
      console.warn(
        `You have already chosen a start point for this ship: ${
          this.startCoord
        }`
      );
      return null;
    } else if (this.placeOnBoard(coord)) {
      this.startCoord = coord;
      return this.potentialCoordinates;
    }
  }

  placeEndCoordinate(coord) {
    if (this.endCoord) {
      console.warn(
        `You have already chosen an end point for this ship: ${this.startCoord}`
      );
      return null;
    } else if (!this.potentialCoordinates.includes(coord)) {
      console.warn(`You cannot use those coordinates: "${coord}"`);
      return null;
    } else if (this.placeOnBoard(coord)) {
      this.endCoord = coord;
      this.fillInShip();
      return this.coordinates;
    }
  }

  placeOnBoard(coord) {
    const coordinates = this.board.coordinates.get(coord);

    switch (true) {
      case !coordinates:
        console.log(coord);
        console.warn(`The coordinates "${coord}" is out of bounds.`);
        return false;
      case coordinates.hasShip:
        console.warn(`The coordinates "${coord}" already has a ship.`);
        return false;
      default:
        coordinates.setShip(this);
        this.coordinates.push(coordinates);
        return true;
    }
  }

  fillInShip() {
    getPossibleCoordinates(this.startCoord, this.endCoord).forEach(coord => {
      if (!this.coordinateExists(coord)) {
        this.placeOnBoard(coord);
      }
    });
  }
}

module.exports = Ship;
