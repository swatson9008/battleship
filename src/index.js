/* eslint-disable import/no-mutable-exports */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-restricted-globals */
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
  aiPlayer, humanPlayer, winState, winnerCheck, aiBoard, playerBoard, computerTurn, playersTurn,
} from './game';

const playerBField = document.getElementById('playerB');
const aiBField = document.getElementById('aiB');
const gameStart = document.getElementById('gameStart');
const playerControls = document.getElementById('playerControl');
const randomButton = document.getElementById('randomize');
const shipSwap = document.getElementById('shipHV');
const aiLabel = document.getElementById('cLabel');

let orientationSetting = 'horizontal';

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

const aiGroup = document.querySelector('#aiB');

createplayerBoard(playerBField);

const playerGroup = document.querySelector('#playerB');
const playerCells = playerGroup.querySelectorAll('div');

console.log(aiBoard.gameB);

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
  return 'done';
}

function checkIfDone(board) {
  if (determineShip(board) === 'done') { gameStart.style.visibility = 'visible'; }
}

function placeAShip(board, coord1, coord2) {
  let ship = determineShip(board);
  if (ship === 'done') { return alert('cant place anymore ships!'); }
  if (orientationSetting === 'horizontal') { board.placeShipH(ship, Number(coord1), Number(coord2)); } else { board.placeShipV(ship, Number(coord1), Number(coord2)); }
  paintCells(board);
  console.log(playerBoard.gameB);
}

function addColor() {
  this.style.backgroundColor = '#235c6e';
}

function removeColor() {
  this.style.backgroundColor = '#44b5d8';
}

playerCells.forEach((cell) => {
  cell.addEventListener('click', (event) => {
    const coord = event.target.id.toString();
    const coord1 = coord.charAt(0);
    const coord2 = coord.charAt(1);
    placeAShip(playerBoard, coord1, coord2);
    checkIfDone(playerBoard);
  });
  cell.addEventListener('mouseover', addColor);
  cell.addEventListener('mouseout', removeColor);
});

function startGame() {
  aiBField.style.visibility = 'visible';
  gameStart.style.visibility = 'hidden';
  aiLabel.style.visibility = 'visible';
  playerControls.remove();
  createplayerBoard(aiBField);
  const aiCells = aiGroup.querySelectorAll('div');
  aiCells.forEach((div) => {
    div.addEventListener('click', () => {
      if (winnerCheck === true) { return alert('game finished'); } playersTurn(div, aiBoard);
    });
  });
  playerCells.forEach((cell) => {
    cell.removeEventListener('mouseover', addColor);
    cell.removeEventListener('mouseout', removeColor);
  });
}

gameStart.addEventListener('click', startGame);

export {
  playerGroup, playerCells, determineShip, aiGroup,
};
