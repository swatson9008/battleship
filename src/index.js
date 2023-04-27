/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-shadow */
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
const shipSwap = document.getElementById('shipHV');

let orientationSetting = 'horizontal';

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

function paintCells(board) {
  playerCells.forEach((cell) => {
    cell.style.backgroundColor = '#44b5d8';
  });
  for (let i = 0; i < board.gameB.length; i++) {
    for (let j = 0; j < board.gameB[i].length; j++) {
      if (board.gameB[i][j] !== null) {
        let coloredCell = document.getElementById(`${i}${j}`);
        coloredCell.style.backgroundColor = '#235c6e';
      }
    }
  }
}

function randomizePlacements(board) {
  board.refreshBoard();
  aiPlayer.randomSelection(board, board.ships.carrier);
  aiPlayer.randomSelection(board, board.ships.battleship);
  aiPlayer.randomSelection(board, board.ships.destroyer);
  aiPlayer.randomSelection(board, board.ships.submarine);
  aiPlayer.randomSelection(board, board.ships.patrol);
}

randomizePlacements(aiBoard);
randomButton.addEventListener('click', () => {
  randomizePlacements(playerBoard); console.log(playerBoard.gameB);
  gameStart.style.visibility = 'visible';
  paintCells(playerBoard);
});

function switchOrientation() {
  if (orientationSetting === 'horizontal') { orientationSetting = 'vertical'; } else { orientationSetting = 'horizontal'; }
  console.log(orientationSetting);
}

shipSwap.addEventListener('click', () => { switchOrientation(); });

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
  if (nullCount === 17) { return 'done'; }
}

playerCells.forEach((cell) => {
  cell.addEventListener('click', () => {
    determineShip(playerBoard);
  });
});

export { playerGroup, playerCells, boardCells };
