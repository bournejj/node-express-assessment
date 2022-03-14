const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});
describe('#timeword', () => {
  test('is it pm', () => {
    expect(timeWord('13:24')).toBe('one twenty-four pm');
  });
  });
describe('#timeword', () => {
  test('is it am', () => {
    expect(timeWord('10:30')).toBe('ten thirty am');
  });
  });
describe('#timeword', () => {
  test('is it oclock', () => {
    expect(timeWord('14:00')).toBe("two o'clock pm");
  });
  });
