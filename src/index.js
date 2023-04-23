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
const gameStart = document.getElementById('gameStart');
const playerControls = document.getElementById('playerControl');
const randomButton = document.getElementById('randomize');

function startGame() {
  aiBField.style.visibility = 'visible';
  gameStart.style.visibility = 'hidden';
  playerControls.remove();
}

gameStart.addEventListener('click', startGame);

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

createplayerBoard(playerBField);

const playerGroup = document.querySelector('#playerB');
const playerCells = playerGroup.querySelectorAll('div');

console.log(aiBoard.gameB);

boardCells.forEach((div) => {
  div.addEventListener('click', () => {
    playersTurn(div, aiBoard);
  });
});

function randomizePlacements(board) {
  board.refreshBoard();
  aiPlayer.randomSelection(board, board.ships.carrier);
  aiPlayer.randomSelection(board, board.ships.battleship);
  aiPlayer.randomSelection(board, board.ships.destroyer);
  aiPlayer.randomSelection(board, board.ships.submarine);
  aiPlayer.randomSelection(board, board.ships.patrol);
  console.log(playerBoard.gameB);
}

randomizePlacements(aiBoard);
randomButton.addEventListener('click', () => { randomizePlacements(playerBoard); });

export { playerGroup, playerCells, boardCells };
