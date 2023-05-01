/* eslint-disable prefer-template */
/* eslint-disable no-useless-concat */
/* eslint-disable prefer-const */
/* eslint-disable no-empty */
/* eslint-disable max-len */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-import-assign */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
/* eslint-disable import/named */
/* eslint-disable import/no-cycle */
/* eslint-disable no-alert */
/* eslint-disable no-const-assign */
/* eslint-disable consistent-return */
/* eslint-disable radix */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
import gameBoard from './gameBoard';
import {
  hPlayer, comPlayer,
} from './players';
import {
  playerGroup, playerCells, aiGroup,
} from '.';

let turnCount = 0;

const playerBoard = new gameBoard('playerOne');
const aiBoard = new gameBoard('playerTwo');

const aiPlayer = comPlayer();
const humanPlayer = hPlayer();

let computerAttempts = 0;

let winnerCheck = false;

let useSmartAttack = false;

const winnerArea = document.getElementById('winnerCircle');

function winState() {
  winnerCheck = true;
  if (this === 'player') {
    winDivCreate('Player');
  } else { winDivCreate('Computer'); }
}

function winDivCreate(winner) {
  let winDiv = document.createElement('div');
  winDiv.id = winDiv;
  winDiv.innerHTML = '<span>' + winner + ' ' + 'wins!' + '</span>';
  winnerArea.appendChild(winDiv);
}

function computerTurn(board) {
  if (useSmartAttack === true) {
    let coord = Number(computerAttempts) - 1;
    let row = String(aiPlayer.attackCord[coord])[0];
    let col = String(aiPlayer.attackCord[coord])[1];
    if (aiPlayer.smartAttack(board, row, col) === 'hit') {
      playerCells.forEach((div) => {
        if (div.id === String(aiPlayer.attackCord[computerAttempts])) {
          div.style.backgroundColor = '#F07B7B';
          div.textContent = 'X';
        }
      });
      if (playerBoard.reportAllSunk() === true) { winState.call('computer'); } else {
        computerAttempts++;
        computerTurn(board);
      }
    } else {
      playerCells.forEach((div) => {
        if (div.id === String(aiPlayer.attackCord[computerAttempts])) {
          div.textContent = 'X';
        }
      });
      useSmartAttack = false;
      computerAttempts++;
    }
  } else if (aiPlayer.randomAttack(board, 0, 9, 0, 9) === 'hit') {
    playerCells.forEach((div) => {
      if (div.id === String(aiPlayer.attackCord[computerAttempts])) {
        div.style.backgroundColor = '#F07B7B';
        div.textContent = 'X';
      }
    });
    if (playerBoard.reportAllSunk() === true) { winState.call('computer'); } else {
      useSmartAttack = true;
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
    if (aiBoard.reportAllSunk() === true) { winState.call('player'); } else if (aiBoard.reportAllSunk() === false) { alert('Hit!'); }
  }
}

export {
  playersTurn, computerTurn, winState, winnerCheck, aiPlayer, humanPlayer, aiBoard, playerBoard,
};
