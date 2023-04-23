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
import { playerGroup, playerCells, boardCells } from '.';

let turnCount = 0;

const playerBoard = new gameBoard('playerOne');
const aiBoard = new gameBoard('playerTwo');

const aiPlayer = comPlayer();
const humanPlayer = hPlayer();

let computerAttempts = 0;

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
    if (aiBoard.reportAllSunk() === true) { alert('You win'); } else if (aiBoard.reportAllSunk() === false) { alert('Hit!'); }
  }
}

export {
  playersTurn, computerTurn, aiPlayer, humanPlayer, aiBoard, playerBoard,
};
