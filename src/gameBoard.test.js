/* eslint-disable import/no-duplicates */
/* eslint-disable no-constant-condition */
/* eslint-disable no-undef */
/* eslint-disable new-cap */
import gameBoard from './gameBoard';

const playerBoard = new gameBoard('playerOne');

test('displays the correct length', () => {
  expect(playerBoard.gameB.length).toEqual(10);
});

test('places the ship objects in the board horizontally', () => {
  playerBoard.placeShipH(playerBoard.ships.carrier, 0, 0);
  expect(playerBoard.gameB[0][0]).toBe(playerBoard.ships.carrier);
});

test('testing for a false answer', () => {
  playerBoard.currCordY = 9;
  expect(playerBoard.placeShipV(playerBoard.ships.carrier)).toBe(false);
});

test('places the ship objects in the board vertically', () => {
  playerBoard.placeShipV(playerBoard.ships.patrol, 1, 1);
  expect(playerBoard.gameB[1][1]).toBe(playerBoard.ships.patrol);
});

test('testing if the miss count works when receiving an attack with empty coords', () => {
  playerBoard.placeShipH(playerBoard.ships.patrol, 1, 1);
  playerBoard.receiveAttack(0, 0);
  expect(playerBoard.missCount[0]).toBe(0, 0);
});
