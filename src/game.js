/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
import gameBoard from './gameBoard';
import {
  hPlayer, comPlayer,
} from './players';

const turnCount = 0;

const playerBoard = new gameBoard('playerOne');
const aiBoard = new gameBoard('playerTwo');

const aiPlayer = comPlayer();
const humanPlayer = hPlayer();

playerBoard.placeShipH(playerBoard.ships.carrier, 1, 1);

