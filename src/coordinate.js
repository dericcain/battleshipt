const { sunk } = require("./banner");

class Coordinate {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.shotAttempted = false;
  }

  get isHit() {
    return this.shotAttempted && this.hasShip;
  }

  get hasShip() {
    return Boolean(this.ship);
  }

  get hitMessage() {
    if (this.ship.isSunk) {
      // Return our "sunk" banner
      return sunk;
    }
    return "🔥🔥🔥🔥🔥🔥 HIT 🔥🔥🔥🔥🔥🔥\n";
  }

  hit() {
    if (this.shotAttempted) {
      console.warn("You already attempted this shot.");
    } else {
      this.shotAttempted = true;
      this.printShotMessage();
    }
  }

  printShotMessage() {
    if (this.hasShip) {
      console.log(this.hitMessage);
    } else {
      console.log("Miss... 🚫\n");
    }
  }

  setShip(ship) {
    // We may have already assigned a ship
    if (!this.hasShip) {
      this.ship = ship;
    }
  }
}

module.exports = Coordinate;
