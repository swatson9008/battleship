/* eslint-disable no-undef */
import shipFactory from './ship';

describe('shipFactory stuff', () => {
  test('shows the number of hits', () => {
    const carrier = shipFactory('carrier', 5, 1);
    expect(carrier.hits).toEqual(1);
  });
  test('show if a ship has been sunk', () => {
    const patrol = shipFactory('patrol', 2, 2);
    expect(patrol.isSunk).toBe(true);
  });
});
