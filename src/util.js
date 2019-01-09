const readline = require("readline");

const alphabet = "abcdefghijklmnopqrstuvwxyz";

const splitCoordinates = coord => [
  coord.substr(0, 1),
  coord.substr(1, coord.length)
];

const pickRandomElement = array =>
  array[Math.floor(Math.random() * array.length)];

const question = question => {
  const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise(resolve => {
    input.question(question, answer => {
      input.close();
      resolve(answer);
    });
  });
};

const getPossibleCoordinates = (
  startCoord,
  endCoord,
  shouldIncludeStartCoord = true
) => {
  const [startX, startY] = splitCoordinates(startCoord);
  const [endX, endY] = splitCoordinates(endCoord);
  const points = [];

  // If we are getting a list of the possible end coordinates for ship placement, we do not want the
  // starting coordinate because we already have it and have already set it.
  if (shouldIncludeStartCoord) {
    points.push(startCoord);
  }

  if (startX === endX && Number(startY) < Number(endY)) {
    let start = Number(startY);
    const end = Number(endY);
    while (start++ < end - 1) {
      points.push(`${startX}${start}`);
    }
  } else if (startX === endX && Number(startY) > Number(endY)) {
    const start = Number(startY);
    let end = Number(endY);
    while (end++ < start - 1) {
      points.push(`${startX}${end}`);
    }
  } else if (alphabet.indexOf(startX) < alphabet.indexOf(endX)) {
    let start = alphabet.indexOf(startX);
    const end = alphabet.indexOf(endX);
    while (start++ < end - 1) {
      points.push(`${alphabet[start]}${startY}`);
    }
  } else if (alphabet.indexOf(startX) > alphabet.indexOf(endX)) {
    const start = alphabet.indexOf(startX);
    let end = alphabet.indexOf(endX);
    while (end++ < start - 1) {
      points.push(`${alphabet[end]}${startY}`);
    }
  }

  points.push(endCoord);

  return points;
};

module.exports = {
  alphabet,
  splitCoordinates,
  pickRandomElement,
  question,
  getPossibleCoordinates
};
