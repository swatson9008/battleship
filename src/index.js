/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable max-len */
/* eslint-disable radix */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable new-cap */
/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import './style.css';
import gameBoard from './gameBoard';
import {
  hPlayer, comPlayer,
} from './players';
import {
  aiPlayer, humanPlayer, aiBoard, playerBoard, computerTurn, playersTurn,
} from './game';

const playerBField = document.getElementById('playerB');
const aiBField = document.getElementById('aiB');

function createplayerBoard(boardField) {
  let rowId = 0;
  for (let i = 0; i < 100; i++) {
    let columnId = i % 10;
    const newItem = document.createElement('div');
    newItem.id = `${rowId}${columnId}`;
    newItem.classList.add('boardSpace');
    boardField.appendChild(newItem);
    if (columnId === 9) { rowId++; }
  }
}

createplayerBoard(aiBField);

const boardCells = document.querySelectorAll('.boardSpace');

playerBoard.placeShipH(playerBoard.ships.carrier, 1, 1);
playerBoard.placeShipV(playerBoard.ships.battleship, 2, 0);
playerBoard.placeShipH(playerBoard.ships.destroyer, 5, 5);
playerBoard.placeShipV(playerBoard.ships.submarine, 7, 3);
playerBoard.placeShipH(playerBoard.ships.patrol, 0, 6);

aiPlayer.randomSelection(aiBoard, aiBoard.ships.carrier);
aiPlayer.randomSelection(aiBoard, aiBoard.ships.battleship);
aiPlayer.randomSelection(aiBoard, aiBoard.ships.destroyer);
aiPlayer.randomSelection(aiBoard, aiBoard.ships.submarine);
aiPlayer.randomSelection(aiBoard, aiBoard.ships.patrol);

createplayerBoard(playerBField);

const playerGroup = document.querySelector('#playerB');
const playerCells = playerGroup.querySelectorAll('div');

console.log(aiBoard.gameB);

boardCells.forEach((div) => {
  div.addEventListener('click', () => {
    playersTurn(div, aiBoard);
  });
});

export { playerGroup, playerCells, boardCells };
