/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aiBoard": () => (/* binding */ aiBoard),
/* harmony export */   "aiPlayer": () => (/* binding */ aiPlayer),
/* harmony export */   "computerTurn": () => (/* binding */ computerTurn),
/* harmony export */   "humanPlayer": () => (/* binding */ humanPlayer),
/* harmony export */   "playerBoard": () => (/* binding */ playerBoard),
/* harmony export */   "playersTurn": () => (/* binding */ playersTurn),
/* harmony export */   "winState": () => (/* binding */ winState),
/* harmony export */   "winnerCheck": () => (/* binding */ winnerCheck)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./players */ "./src/players.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/index.js");
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



let turnCount = 0;
const playerBoard = new _gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"]('playerOne');
const aiBoard = new _gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"]('playerTwo');
const aiPlayer = (0,_players__WEBPACK_IMPORTED_MODULE_1__.comPlayer)();
const humanPlayer = (0,_players__WEBPACK_IMPORTED_MODULE_1__.hPlayer)();
let computerAttempts = 0;
let winnerCheck = false;
let useSmartAttack = false;
const winnerArea = document.getElementById('winnerCircle');
function winState() {
  winnerCheck = true;
  if (this === 'player') {
    winDivCreate('Player');
  } else {
    winDivCreate('Computer');
  }
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
      ___WEBPACK_IMPORTED_MODULE_2__.playerCells.forEach(div => {
        if (div.id === String(aiPlayer.attackCord[computerAttempts])) {
          div.style.backgroundColor = '#F07B7B';
          div.textContent = 'X';
        }
      });
      if (playerBoard.reportAllSunk() === true) {
        winState.call('computer');
      } else {
        computerAttempts++;
        computerTurn(board);
      }
    } else {
      ___WEBPACK_IMPORTED_MODULE_2__.playerCells.forEach(div => {
        if (div.id === String(aiPlayer.attackCord[computerAttempts])) {
          div.textContent = 'X';
        }
      });
      useSmartAttack = false;
      computerAttempts++;
    }
  } else if (aiPlayer.randomAttack(board, 0, 9, 0, 9) === 'hit') {
    ___WEBPACK_IMPORTED_MODULE_2__.playerCells.forEach(div => {
      if (div.id === String(aiPlayer.attackCord[computerAttempts])) {
        div.style.backgroundColor = '#F07B7B';
        div.textContent = 'X';
      }
    });
    if (playerBoard.reportAllSunk() === true) {
      winState.call('computer');
    } else {
      useSmartAttack = true;
      computerAttempts++;
      computerTurn(board);
    }
  } else {
    ___WEBPACK_IMPORTED_MODULE_2__.playerCells.forEach(div => {
      if (div.id === String(aiPlayer.attackCord[computerAttempts])) {
        div.textContent = 'X';
      }
    });
    computerAttempts++;
  }
}
function playersTurn(element, board) {
  if (element.textContent === 'X') {
    alert('cannot be selected');
  } else if (board.gameB[parseInt(element.id.charAt(0))][parseInt(element.id.charAt(1))] === null) {
    element.textContent = 'X';
    turnCount++;
    humanPlayer.chooseAttack(board, parseInt(element.id.charAt(0)), parseInt(element.id.charAt(1)));
    computerTurn(playerBoard);
  } else {
    humanPlayer.chooseAttack(board, parseInt(element.id.charAt(0)), parseInt(element.id.charAt(1)));
    element.style.backgroundColor = '#F07B7B';
    element.textContent = 'X';
    if (aiBoard.reportAllSunk() === true) {
      winState.call('player');
    } else if (aiBoard.reportAllSunk() === false) {
      alert('Hit!');
    }
  }
}


/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-empty */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-else-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-import-module-exports */
/* eslint-disable class-methods-use-this */
/* eslint-disable new-cap */
/* eslint-disable no-plusplus */


const gameBoard = function (player) {
  const gameB = createBoard();
  const missCount = [];
  const currCordX = 0;
  const currCordY = 0;
  const sunkShips = [];
  function createBoard() {
    const columns = 10;
    const rows = 10;
    const boardArray = [];
    for (let i = 0; i < rows; i++) {
      boardArray[i] = [];
      for (let j = 0; j < columns; j++) {
        boardArray[i][j] = null;
      }
    }
    return boardArray;
  }
  function refreshBoard() {
    for (let i = 0; i < gameB.length; i++) {
      for (let j = 0; j < gameB[i].length; j++) {
        gameB[i][j] = null;
      }
    }
  }
  const ships = {
    carrier: (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(5, 0),
    battleship: (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(4, 0),
    destroyer: (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3, 0),
    submarine: (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3, 0),
    patrol: (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(2, 0)
  };
  function placeShipH(ships, currCordX, currCordY) {
    if (ships.size + currCordY - 2 < 10 && gameB[currCordX][currCordY] === null) {
      for (let i = 0; i < ships.size; i++) {
        if (gameB[currCordX][currCordY + i] !== null) {
          return false;
        }
      }
      for (let i = 0; i < ships.size; i++) {
        gameB[currCordX][currCordY + i] = ships;
      }
      return gameB;
    } else {
      return false;
    }
  }
  function placeShipV(ships, currCordX, currCordY) {
    if (ships.size + currCordX - 1 < 10 && gameB[currCordX][currCordY] === null) {
      for (let i = 0; i < ships.size; i++) {
        if (gameB[currCordX + i][currCordY] !== null) {
          return false;
        }
      }
      for (let i = 0; i < ships.size; i++) {
        gameB[currCordX + i][currCordY] = ships;
      }
      return gameB;
    } else {
      return false;
    }
  }
  function placeShipD(ships, currCordX, currCordY) {
    if (ships.size + currCordY + 1 < 10 && gameB[currCordX][currCordY] === null) {
      for (let i = 0; i < ships.size; i++) {
        gameB[currCordX + i][currCordY + i] = ships;
      }
      return gameB;
    } else {
      return false;
    }
  }
  function receiveAttack(currCordX, currCordY) {
    if (gameB[currCordX][currCordY] != null) {
      gameB[currCordX][currCordY].hit();
      sunkShipCheck(currCordX, currCordY);
    } else {
      missCount.push(currCordX, currCordY);
    }
  }
  function sunkShipCheck(currCordX, currCordY) {
    if (gameB[currCordX][currCordY].isSunk === true) {
      sunkShips.push(gameB[currCordX][currCordY]);
    }
  }
  function reportAllSunk() {
    if (sunkShips.length === 5) {
      return true;
    } else {
      return false;
    }
  }
  return {
    player,
    gameB,
    ships,
    missCount,
    sunkShips,
    refreshBoard,
    placeShipH,
    placeShipV,
    placeShipD,
    receiveAttack,
    sunkShipCheck,
    reportAllSunk
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameBoard);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aiGroup": () => (/* binding */ aiGroup),
/* harmony export */   "determineShip": () => (/* binding */ determineShip),
/* harmony export */   "playerCells": () => (/* binding */ playerCells),
/* harmony export */   "playerGroup": () => (/* binding */ playerGroup)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./players */ "./src/players.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game */ "./src/game.js");
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
    if (columnId === 9) {
      rowId++;
    }
    newItem.style.backgroundColor = 'rgb(68, 182, 216)';
  }
}
const aiGroup = document.querySelector('#aiB');
createplayerBoard(playerBField);
const playerGroup = document.querySelector('#playerB');
const playerCells = playerGroup.querySelectorAll('div');
console.log(_game__WEBPACK_IMPORTED_MODULE_3__.aiBoard.gameB);
function paintCells(board) {
  playerCells.forEach(cell => {
    cell.style.backgroundColor = 'rgb(68, 182, 216)';
  });
  for (let i = 0; i < board.gameB.length; i++) {
    for (let j = 0; j < board.gameB[i].length; j++) {
      if (board.gameB[i][j] !== null) {
        let coloredCell = document.getElementById(`${i}${j}`);
        coloredCell.style.backgroundColor = 'rgb(35, 92, 110)';
      }
    }
  }
}
function randomizePlacements(board) {
  board.refreshBoard();
  _game__WEBPACK_IMPORTED_MODULE_3__.aiPlayer.randomSelection(board, board.ships.carrier);
  _game__WEBPACK_IMPORTED_MODULE_3__.aiPlayer.randomSelection(board, board.ships.battleship);
  _game__WEBPACK_IMPORTED_MODULE_3__.aiPlayer.randomSelection(board, board.ships.destroyer);
  _game__WEBPACK_IMPORTED_MODULE_3__.aiPlayer.randomSelection(board, board.ships.submarine);
  _game__WEBPACK_IMPORTED_MODULE_3__.aiPlayer.randomSelection(board, board.ships.patrol);
}
randomizePlacements(_game__WEBPACK_IMPORTED_MODULE_3__.aiBoard);
randomButton.addEventListener('click', () => {
  randomizePlacements(_game__WEBPACK_IMPORTED_MODULE_3__.playerBoard);
  console.log(_game__WEBPACK_IMPORTED_MODULE_3__.playerBoard.gameB);
  gameStart.style.visibility = 'visible';
  paintCells(_game__WEBPACK_IMPORTED_MODULE_3__.playerBoard);
});
function switchOrientation() {
  if (orientationSetting === 'horizontal') {
    orientationSetting = 'vertical';
  } else {
    orientationSetting = 'horizontal';
  }
}
shipSwap.addEventListener('click', () => {
  switchOrientation();
});
function determineShip(board) {
  let nullCount = 0;
  for (let i = 0; i < board.gameB.length; i++) {
    for (let j = 0; j < board.gameB[i].length; j++) {
      if (board.gameB[i][j] !== null) {
        nullCount++;
      }
    }
  }
  if (nullCount === 0) {
    return board.ships.carrier;
  }
  if (nullCount === 5) {
    return board.ships.battleship;
  }
  if (nullCount === 9) {
    return board.ships.destroyer;
  }
  if (nullCount === 12) {
    return board.ships.submarine;
  }
  if (nullCount === 15) {
    return board.ships.patrol;
  }
  return 'done';
}
function checkIfDone(board) {
  if (determineShip(board) === 'done') {
    gameStart.style.visibility = 'visible';
  }
}
function placeAShip(board, coord1, coord2) {
  let ship = determineShip(board);
  if (ship === 'done') {
    return alert('cant place anymore ships!');
  }
  if (orientationSetting === 'horizontal') {
    board.placeShipH(ship, Number(coord1), Number(coord2));
  } else {
    board.placeShipV(ship, Number(coord1), Number(coord2));
  }
  paintCells(board);
  console.log(_game__WEBPACK_IMPORTED_MODULE_3__.playerBoard.gameB);
}
function addColor() {
  if (this.style.backgroundColor !== 'rgb(68, 182, 216)') {
    this.style.backgroundColor = 'rgb(209, 78, 78)';
  } else {
    this.style.backgroundColor = 'rgb(35, 92, 110)';
  }
}
function removeColor() {
  if (this.style.backgroundColor === 'rgb(209, 78, 78)') {
    this.style.backgroundColor = 'rgb(35, 92, 110)';
  } else {
    this.style.backgroundColor = 'rgb(68, 182, 216)';
  }
  paintCells(_game__WEBPACK_IMPORTED_MODULE_3__.playerBoard);
}
playerCells.forEach(cell => {
  cell.addEventListener('click', event => {
    const coord = event.target.id.toString();
    const coord1 = coord.charAt(0);
    const coord2 = coord.charAt(1);
    placeAShip(_game__WEBPACK_IMPORTED_MODULE_3__.playerBoard, coord1, coord2);
    checkIfDone(_game__WEBPACK_IMPORTED_MODULE_3__.playerBoard);
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
  aiCells.forEach(div => {
    div.addEventListener('click', () => {
      if (_game__WEBPACK_IMPORTED_MODULE_3__.winnerCheck === true) {
        return alert('game finished');
      }
      (0,_game__WEBPACK_IMPORTED_MODULE_3__.playersTurn)(div, _game__WEBPACK_IMPORTED_MODULE_3__.aiBoard);
    });
  });
  playerCells.forEach(cell => {
    cell.removeEventListener('mouseover', addColor);
    cell.removeEventListener('mouseout', removeColor);
  });
}
gameStart.addEventListener('click', startGame);


/***/ }),

/***/ "./src/players.js":
/*!************************!*\
  !*** ./src/players.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "comPlayer": () => (/* binding */ comPlayer),
/* harmony export */   "hPlayer": () => (/* binding */ hPlayer)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");
/* eslint-disable no-console */
/* eslint-disable no-else-return */
/* eslint-disable consistent-return */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable func-names */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-import-module-exports */
/* eslint-disable no-alert */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable new-cap */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */


const playerBoard = new _gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"]('playerOne');
const aiBoard = new _gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"]('playerTwo');
const hPlayer = function (name) {
  let attackCord = [];
  function chooseAttack(board, row, col) {
    if (board.gameB[row][col] != null) {
      attackCord.push([row, col]);
      board.receiveAttack(row, col);
    } else {
      attackCord.push([row, col]);
      board.receiveAttack(row, col);
    }
  }
  return {
    chooseAttack,
    attackCord
  };
};
const comPlayer = function (name) {
  let attackCord = [];
  function randomAttack(board, rowMin, rowMax, colMin, colMax) {
    const row = Math.floor(Math.random() * (rowMax - rowMin + 1) + rowMin);
    const col = Math.floor(Math.random() * (colMax - colMin + 1) + colMin);
    if (attackCord.some(element => element[0] === col && element[1] === row)) {
      randomAttack(board, 0, 9, 0, 9);
    }
    if (board.gameB[row][col] != null) {
      attackCord.push([`${row}${col}`]);
      board.receiveAttack(row, col);
      return 'hit';
    } else {
      attackCord.push([`${row}${col}`]);
      board.receiveAttack(row, col);
    }
  }
  function randomSelection(board, ship) {
    let randomPick = Math.floor(Math.random() * 2);
    const row = Math.floor(Math.random() * 10);
    const col = Math.floor(Math.random() * 10);
    if (randomPick === 0) {
      if (board.placeShipH(ship, row, col) === false) {
        randomSelection(board, ship);
      }
    } else if (board.placeShipV(ship, row, col) === false) {
      randomSelection(board, ship);
    }
  }
  function smartPick(n) {
    let min = Math.max(n - 1);
    let max = Math.min(n + 1);
    let randno = Math.floor(Math.random() * (max - min + 1) + min);
    if (randno > 9) {
      randno = 9;
    }
    return randno;
  }
  function smartAttack(board, row, col) {
    let smartRow = smartPick(row);
    let smartCol = smartPick(col);
    if (attackCord.some(element => element[0] === smartCol && element[1] === smartRow)) {
      smartAttack(board, row, col);
    }
    if (board.gameB[smartRow][smartCol] != null) {
      attackCord.push([`${smartRow}${smartCol}`]);
      board.receiveAttack(smartRow, smartCol);
      return 'hit';
    } else {
      attackCord.push([`${smartRow}${smartCol}`]);
      board.receiveAttack(smartRow, smartCol);
    }
  }
  return {
    attackCord,
    smartPick,
    smartAttack,
    randomAttack,
    randomSelection
  };
};


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "battleShip": () => (/* binding */ battleShip),
/* harmony export */   "carrier": () => (/* binding */ carrier),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "destroyer": () => (/* binding */ destroyer),
/* harmony export */   "patrol": () => (/* binding */ patrol),
/* harmony export */   "submarine": () => (/* binding */ submarine)
/* harmony export */ });
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable max-len */
// eslint-disable-next-line import/prefer-default-export
const shipFactory = function (size, hits) {
  const ship = {};
  ship.size = size;
  ship.hits = hits;
  ship.isSunk = false;
  ship.hit = function () {
    this.hits++;
    if (this.hits === this.size) {
      this.isSunk = true;
    }
  };
  return ship;
};
const carrier = shipFactory('carrier', 5, 0);
const battleShip = shipFactory('battleship', 4, 0);
const destroyer = shipFactory('destroyer', 3, 0);
const submarine = shipFactory('submarine', 3, 0);
const patrol = shipFactory('patrol', 2, 0);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shipFactory);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/media/mesmerizing-shot-crystal-blue-ocean-waves_181624-48854.avif */ "./src/media/mesmerizing-shot-crystal-blue-ocean-waves_181624-48854.avif"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    background-color: rgb(111, 138, 163);\n    background: linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.2)), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n   \n}\n\n#mainContainer {\n    margin-top: 30px;\n}\n\n#gameStartArea {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    visibility: hidden;\n}\n\n#labels {\n    display: grid;\n    grid-template-columns: 1fr 2fr 2fr 1fr;\n    margin-bottom: 5px;\n}\n\n#pLabel {\n    grid-column: 2;\n}\n\n#cLabel {\n    visibility: hidden;\n    grid-column: 3;\n}\n\n#playerB {\n    grid-column: 2;\n}\n\n#aiB {\n    grid-column: 3;\n}\n\n#playerControl {\n    grid-column: 3;\n    display: flex;\n    align-items: flex-start;\n    flex-direction: column-reverse;\n    justify-content: center;\n}\n\n#gameInfo {\n    grid-column: 1;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 5px;\n}\n\nspan {\n    background-color: aliceblue;\n    padding: 2px;\n    border-radius: 5px;\n}\n\n#playerB, #aiB {\n    display: grid;\n    align-items: center;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    max-width: 400px;\n}\n\n.boardLayout > div {\n    border: 1px solid black;\n    padding: 5px;\n    background-color:rgb(68, 182, 216);\n    min-height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#aiB {\n    visibility: hidden;\n}\n\n@media (min-width: 1201px){\n    #boardC {\n        display: grid;\n        grid-template-columns: 1fr 2fr 2fr 1fr;\n    }\n\n}\n\n@media (max-width: 1200px){\n    #playerB {\n        margin-bottom: 20px;\n    }\n\n}\n\n#winnerCircle {\n    margin-top: 20px;\n    text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oCAAoC;IACpC,oGAA4I;IAC5I,sBAAsB;;AAE1B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,kBAAkB;AACtB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,uBAAuB;IACvB,8BAA8B;IAC9B,uBAAuB;AAC3B;;AAEA;IACI,cAAc;IACd,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,2BAA2B;IAC3B,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,sCAAsC;IACtC,mCAAmC;IACnC,gBAAgB;AACpB;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,kCAAkC;IAClC,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI;QACI,aAAa;QACb,sCAAsC;IAC1C;;AAEJ;;AAEA;IACI;QACI,mBAAmB;IACvB;;AAEJ;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB","sourcesContent":["body {\n    background-color: rgb(111, 138, 163);\n    background: linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.2)), url('../src/media/mesmerizing-shot-crystal-blue-ocean-waves_181624-48854.avif');\n    background-size: cover;\n   \n}\n\n#mainContainer {\n    margin-top: 30px;\n}\n\n#gameStartArea {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    visibility: hidden;\n}\n\n#labels {\n    display: grid;\n    grid-template-columns: 1fr 2fr 2fr 1fr;\n    margin-bottom: 5px;\n}\n\n#pLabel {\n    grid-column: 2;\n}\n\n#cLabel {\n    visibility: hidden;\n    grid-column: 3;\n}\n\n#playerB {\n    grid-column: 2;\n}\n\n#aiB {\n    grid-column: 3;\n}\n\n#playerControl {\n    grid-column: 3;\n    display: flex;\n    align-items: flex-start;\n    flex-direction: column-reverse;\n    justify-content: center;\n}\n\n#gameInfo {\n    grid-column: 1;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 5px;\n}\n\nspan {\n    background-color: aliceblue;\n    padding: 2px;\n    border-radius: 5px;\n}\n\n#playerB, #aiB {\n    display: grid;\n    align-items: center;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    max-width: 400px;\n}\n\n.boardLayout > div {\n    border: 1px solid black;\n    padding: 5px;\n    background-color:rgb(68, 182, 216);\n    min-height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#aiB {\n    visibility: hidden;\n}\n\n@media (min-width: 1201px){\n    #boardC {\n        display: grid;\n        grid-template-columns: 1fr 2fr 2fr 1fr;\n    }\n\n}\n\n@media (max-width: 1200px){\n    #playerB {\n        margin-bottom: 20px;\n    }\n\n}\n\n#winnerCircle {\n    margin-top: 20px;\n    text-align: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/media/mesmerizing-shot-crystal-blue-ocean-waves_181624-48854.avif":
/*!*******************************************************************************!*\
  !*** ./src/media/mesmerizing-shot-crystal-blue-ocean-waves_181624-48854.avif ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cd3c04c65440ca4e7e38.avif";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map