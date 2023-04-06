/* eslint-disable import/no-duplicates */
/* eslint-disable no-constant-condition */
/* eslint-disable no-undef */
/* eslint-disable new-cap */
import gameBoard from './gameBoard';

const playerBoard = new gameBoard('playerOne');
playerBoard.placeShipH(playerBoard.ships.carrier, 2, 2);
playerBoard.placeShipV(playerBoard.ships.patrol, 1, 1);

test('displays the correct length', () => {
  expect(playerBoard.gameB.length).toEqual(10);
});

test('places the ship objects in the board horizontally', () => {
  expect(playerBoard.gameB[2][2]).toBe(playerBoard.ships.carrier);
});

test('testing for a false answer', () => {
  playerBoard.currCordY = 9;
  expect(playerBoard.placeShipV(playerBoard.ships.carrier)).toBe(false);
});

test('places the ship objects in the board vertically', () => {
  expect(playerBoard.gameB[1][1]).toBe(playerBoard.ships.patrol);
});

test('testing if the miss count works when receiving an attack with empty coords', () => {
  playerBoard.receiveAttack(0, 0);
  expect(playerBoard.missCount[0]).toBe(0, 0);
});

test('testing if the correct ship is hit with receiveAttack', () => {
  playerBoard.receiveAttack(1, 1);
  expect(playerBoard.ships.patrol.hits).toBe(1);
});

test('testing if isSunk changes appropiately', () => {
  playerBoard.receiveAttack(1, 1);
  playerBoard.receiveAttack(1, 2);
  expect(playerBoard.ships.patrol.isSunk).toBe(true);
});

test('testing if ship is added to sunkShips', () => {
  expect(playerBoard.sunkShips.length).toBe(1);
});
