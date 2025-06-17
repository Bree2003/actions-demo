const rest = require('../rest');

test('Resta dos números', () => {
    expect(rest(1,2)).toBe(-1);
});