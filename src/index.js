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

let playerBoard = new gameBoard('playerOne');
let aiBoard = new gameBoard('playerTwo');
let aiPlayer = comPlayer(playerBoard);
let humanPlayer = hPlayer(aiBoard);

let turnCount = 0;
let computerAttempts = 0;

playerBoard.placeShipH(playerBoard.ships.carrier, 1, 1);
playerBoard.placeShipV(playerBoard.ships.battleship, 2, 0);
playerBoard.placeShipH(playerBoard.ships.destroyer, 5, 5);
playerBoard.placeShipV(playerBoard.ships.submarine, 7, 3);
playerBoard.placeShipH(playerBoard.ships.patrol, 0, 6);

// aiBoard.placeShipH(aiBoard.ships.patrol, 9, 1);
// aiBoard.placeShipV(aiBoard.ships.submarine, 1, 9);
// aiBoard.placeShipH(aiBoard.ships.destroyer, 0, 0);
// aiBoard.placeShipV(aiBoard.ships.battleship, 2, 4);
// aiBoard.placeShipH(aiBoard.ships.carrier, 7, 2);

function randomChoice(player, board, ship, rowMin, rowMax, colMin, colMax) {
  if (player.randomSelection(board, ship, rowMin, rowMax, colMin, colMax) === false) {
    randomChoice(player, board, ship, rowMin, rowMax, colMin, colMax);
  } else { return 'success'; }
}

randomChoice(aiPlayer, aiBoard, aiBoard.ships.carrier, 0, 9, 0, 9);
randomChoice(aiPlayer, aiBoard, aiBoard.ships.battleship, 0, 9, 0, 9);
randomChoice(aiPlayer, aiBoard, aiBoard.ships.destroyer, 0, 9, 0, 9);
randomChoice(aiPlayer, aiBoard, aiBoard.ships.submarine, 0, 9, 0, 9);
randomChoice(aiPlayer, aiBoard, aiBoard.ships.patrol, 0, 9, 0, 9);

createplayerBoard(playerBField);

const playerGroup = document.querySelector('#playerB');
const playerCells = playerGroup.querySelectorAll('div');

console.log(aiBoard.gameB);

function computerTurn(board) {
  if (aiPlayer.randomAttack(board, 0, 9, 0, 9) === 'hit') {
    playerCells.forEach((div) => {
      if (div.id === String(aiPlayer.attackCord[computerAttempts])) {
        div.style.backgroundColor = '#F07B7B';
        div.textContent = 'X';
      }
    });
    if (playerBoard.reportAllSunk() === true) { alert('Computer Wins'); } else {
      computerAttempts++;
      computerTurn(board);
    }
  } else {
    playerCells.forEach((div) => {
      if (div.id === String(aiPlayer.attackCord[computerAttempts])) {
        div.textContent = 'X';
      }
    });
    computerAttempts++;
  }
}

function playersTurn(element, board) {
  if (element.textContent === 'X') { alert('cannot be selected'); } else if (board.gameB[parseInt(element.id.charAt(0))][parseInt(element.id.charAt(1))] === null) {
    element.textContent = 'X';
    turnCount++;
    humanPlayer.chooseAttack(board, parseInt(element.id.charAt(0)), parseInt(element.id.charAt(1)));
    computerTurn(playerBoard);
  } else {
    humanPlayer.chooseAttack(board, parseInt(element.id.charAt(0)), parseInt(element.id.charAt(1)));
    element.style.backgroundColor = '#F07B7B';
    element.textContent = 'X';
    if (aiBoard.reportAllSunk() === true) { return alert('You win'); } alert('hit');
  }
}

boardCells.forEach((div) => {
  div.addEventListener('click', () => {
    playersTurn(div, aiBoard);
  });
});
