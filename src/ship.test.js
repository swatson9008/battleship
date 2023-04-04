/* eslint-disable no-undef */
import shipFactory from './ship';

describe('shipFactory stuff', () => {
  test('shows the number of hits', () => {
    const carrier = shipFactory(5, 0);
    carrier.hits = 1;
    expect(carrier.hits).toEqual(1);
  });
  test('show if a ship has been sunk', () => {
    const patrol = shipFactory(2, 2);
    expect(patrol.isSunk).toBe(true);
  });
  test('show if a ship has been sunk when changing hits', () => {
    const patrol2 = shipFactory(2, 0);
    patrol2.hits = 2;
    expect(patrol2.isSunk).toBe(true);
  });
});
