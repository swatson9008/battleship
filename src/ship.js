/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable max-len */
// eslint-disable-next-line import/prefer-default-export
export const shipFactory = function (name, length, hits) {
  const ship = {};
  ship.name = name;
  ship.length = length;
  ship.hits = hits;
  ship.isSunk = sunkC();
  function sunkC() { if (ship.length === ship.hits) { return true; } return false; }

  return ship;
};

export const carrier = shipFactory('carrier', 5, 0);
const battleShip = shipFactory('battleship', 4, 0);
const destroyer = shipFactory('destroyer', 3, 0);
const submarine = shipFactory('submarine', 3, 0);
const patrol = shipFactory('patrol', 2, 0);

module.exports = shipFactory;
