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
playerBoard.placeShipV(playerBoard.ships.battleship, 2, 0);
playerBoard.placeShipH(playerBoard.ships.destroyer, 5, 5);
playerBoard.placeShipV(playerBoard.ships.submarine, 7, 3);
playerBoard.placeShipH(playerBoard.ships.patrol, 0, 6);

aiBoard.placeShipH(aiBoard.ships.patrol, 9, 1);
aiBoard.placeShipV(aiBoard.ships.submarine, 1, 9);
aiBoard.placeShipH(aiBoard.ships.destroyer, 0, 0);
aiBoard.placeShipV(aiBoard.ships.battleship, 2, 4);
aiBoard.placeShipH(aiBoard.ships.carrier, 7, 2);

function startGame() {

}
