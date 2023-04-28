/* eslint-disable new-cap */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import gameBoard from './gameBoard';
import { determineShip } from '.';

beforeEach(() => {
  playerBoard = new gameBoard('playerOne');
});

/* test('if it returns the correct default result', () => {
  expect(determineShip(playerBoard)).toBe(playerBoard.ships.carrier);
}); */
