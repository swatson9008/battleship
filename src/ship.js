/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable max-len */
const shipFactory = function (name, length, hits) {
  const ship = {};
  ship.name = name;
  ship.length = length;
  ship.hits = hits;
  ship.isSunk = function sunkC() { if (this.length === this.hits) { return this.true; } return this.false; };

  return ship;
};

const carrier = shipFactory('carrier', 5, 0);
const battleShip = shipFactory('battleship', 4, 0);
const destroyer = shipFactory('destroyer', 3, 0);
const submarine = shipFactory('submarine', 3, 0);
const patrol = shipFactory('patrol', 2, 0);

module.exports = shipFactory;
