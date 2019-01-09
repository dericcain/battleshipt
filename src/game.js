const readline = require("readline");

const Board = require("./board");
const Ship = require("./ship");
const { name, won, lost, instructions, letsPlay } = require("./banner");
const { pickRandomElement, question } = require("./util");

class Game {
  constructor({ numberOfShips = 3, sizeOfBoard = 8 }) {
    this.numberOfShips = numberOfShips;

    // Setup a board for the player
    this.playerBoard = new Board(sizeOfBoard);
    this.playerShips = [];

    // Setup a board for the robot
    this.robotBoard = new Board(sizeOfBoard, true);
    this.robotShips = [];

    // Give some general instructions and a nice banner
    console.log("Time to play....");
    console.log("\x1b[32m%s\x1b[0m", name);
    console.log(instructions);

    // This input is used to set up our player's board
    this.setupInput = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  get playerHasWon() {
    return (
      this.robotShips.filter(ship => ship.isSunk).length === this.numberOfShips
    );
  }

  get robotHasWon() {
    return (
      this.playerShips.filter(ship => ship.isSunk).length === this.numberOfShips
    );
  }

  setup() {
    console.log(
      `It's time to place your ship on the board. You will first enter the start coordinate and then I will ask you for the end coordinate. Let's get going...`
    );
    this.createPlayerShips(this.numberOfShips);
    this.createRobotShips(this.numberOfShips);
  }

  createPlayerShips(numberOfShips) {
    const ship = new Ship(this.playerBoard);

    // Pick the ship's starting coordinates
    this.placeStartCoord(numberOfShips, ship);
  }

  placeStartCoord(numberOfShips, ship) {
    this.playerBoard.print();
    this.setupInput.question(
      `(${numberOfShips} ship(s) to go) Where do you want your ship to start, e.g., "c3"? `,
      answer => {
        // We want to tell the user what their options are for the ship's end coordinates
        const endPossibilities = ship.placeStartCoordinate(answer);

        if (!endPossibilities) {
          // Recurse until we get valid input
          this.placeStartCoord(numberOfShips, ship);
        }

        // Pick the ship's end coordinates
        this.placeEndCoord(endPossibilities, ship, numberOfShips);
      }
    );
  }

  placeEndCoord(endPossibilities, ship, numberOfShips) {
    this.playerBoard.print(endPossibilities);
    this.setupInput.question(
      `Ok, now choose the end point of the ship from one of these ${endPossibilities}: `,
      async answer => {
        const isValid = ship.placeEndCoordinate(answer);

        if (!isValid) {
          // Recurse until we get valid input
          this.placeEndCoord(endPossibilities, ship, numberOfShips);
        }

        this.playerShips.push(ship);

        if (numberOfShips > 1) {
          this.createPlayerShips(numberOfShips - 1);
        } else {
          this.setupInput.close();
          console.log(letsPlay);
          // Start the game!
          await this.play();
        }
      }
    );
  }

  createRobotShips(numberOfShips) {
    const ship = new Ship(this.robotBoard);
    const endPossibilities = ship.placeStartCoordinate(
      pickRandomElement(this.robotBoard.availableCoordinates)
    );
    ship.placeEndCoordinate(pickRandomElement(endPossibilities));

    this.robotShips.push(ship);

    if (numberOfShips > 1) {
      this.createRobotShips(numberOfShips - 1);
    }
  }

  start() {
    this.setup();
  }

  async play() {
    if (this.playerHasWon) {
      console.log(won);
      process.exit(0);
    } else if (this.robotHasWon) {
      console.log(lost);
      process.exit(0);
    } else {
      await this.playerTurn();
      await this.robotTurn();
      // Keep playing until someone wins
      await this.play();
    }
  }

  async playerTurn() {
    const answer = await question(
      'Your turn. Where would you like to fire? (type "me" or "robot" to see the game boards) '
    );
    switch (answer) {
      case "me":
        this.playerBoard.print();
        await this.playerTurn();
        break;
      case "robot":
        this.robotBoard.print();
        await this.playerTurn();
        break;
      default:
        this.robotBoard.fire(answer);
        break;
    }
  }

  robotTurn() {
    return new Promise(resolve => {
      this.playerBoard.fire(pickRandomElement(this.playerBoard.targets));
      resolve();
    });
  }
}

module.exports = Game;
