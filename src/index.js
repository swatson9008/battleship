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

boardCells.forEach((div) => {
  div.addEventListener('click', () => {
    humanPlayer.chooseAttack(aiBoard, parseInt(div.id.charAt(0)), parseInt(div.id.charAt(1)));
    console.log(aiBoard.gameB);
    turnCount++;
    console.log(turnCount);
    console.log(humanPlayer.attackCord);
    console.log(parseInt(div.id.charAt(0)));
    console.log(parseInt(div.id.charAt(1)));
  });
});

createplayerBoard(playerBField);

console.log(aiBoard.gameB);
