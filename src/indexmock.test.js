/* eslint-disable no-undef */
/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
import gameBoard from './gameBoard';

function determineShip(board) {
  let nullCount = 0;
  for (let i = 0; i < board.gameB.length; i++) {
    for (let j = 0; j < board.gameB[i].length; j++) {
      if (board.gameB[i][j] !== null) {
        nullCount++;
      }
    }
  }
  if (nullCount === 0) { return board.ships.carrier; }
  if (nullCount === 5) { return board.ships.battleship; }
  if (nullCount === 9) { return board.ships.destroyer; }
  if (nullCount === 12) { return board.ships.submarine; }
  if (nullCount === 15) { return board.ships.patrol; }
  return 'done';
}

const playerBoard = new gameBoard('playerOne');

test('if it returns the correct default result', () => {
  expect(determineShip(playerBoard)).toBe(playerBoard.ships.carrier);
});

test('if it returns the correct second result', () => {
  playerBoard.placeShipH(playerBoard.ships.carrier, 1, 1);
  expect(determineShip(playerBoard)).toBe(playerBoard.ships.battleship);
});

test('if it returns the correct final result', () => {
  playerBoard.placeShipH(playerBoard.ships.battleship, 0, 0);
  playerBoard.placeShipH(playerBoard.ships.destroyer, 2, 2);
  playerBoard.placeShipH(playerBoard.ships.submarine, 3, 3);
  playerBoard.placeShipH(playerBoard.ships.patrol, 4, 4);
  expect(determineShip(playerBoard)).toBe('done');
});
