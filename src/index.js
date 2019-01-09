const Game = require("./game");

// We have option to make the board a larger size and also change the number of ships
const game = new Game({ sizeOfBoard: 8 });
game.start();
