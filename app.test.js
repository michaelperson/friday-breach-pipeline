// app.test.js — Exhaustive unit tests for app.js

const { additionner, direBonjour } = require('./app');

describe('additionner()', () => {
  test('adds two positive integers', () => {
    expect(additionner(2, 3)).toBe(5);
  });

  test('adds negative numbers', () => {
    expect(additionner(-2, -3)).toBe(-5);
    expect(additionner(-2, 3)).toBe(1);
  });

  test('handles zero correctly', () => {
    expect(additionner(0, 0)).toBe(0);
    expect(additionner(0, 5)).toBe(5);
  });

  test('handles floating point numbers', () => {
    expect(additionner(1.5, 2.25)).toBeCloseTo(3.75);
  });

  test('string + number produces concatenation (JS coercion)', () => {
    expect(additionner('2', 3)).toBe('23');
  });

  test('null and undefined behavior', () => {
    // null is coerced to 0 when added
    expect(additionner(null, 2)).toBe(2);
    // undefined results in NaN
    const result = additionner(undefined, 2);
    expect(Number.isNaN(result)).toBe(true);
  });

  test('handles Infinity and large numbers', () => {
    expect(additionner(Number.POSITIVE_INFINITY, 1)).toBe(Number.POSITIVE_INFINITY);
    expect(additionner(1e308, 1e308)).toBeGreaterThanOrEqual(2e308);
  });

  test('export exists and is a function', () => {
    expect(typeof additionner).toBe('function');
  });
});

describe('direBonjour()', () => {
  test('returns greeting for a normal name', () => {
    expect(direBonjour('Alice')).toBe('Bonjour, Alice !');
  });

  test('whitespace-only names are treated as provided (truthy string)', () => {
    expect(direBonjour(' ')).toBe('Bonjour,  !');
  });

  test('empty string throws (falsy)', () => {
    expect(() => direBonjour('')).toThrow('Un nom est requis !');
  });

  test('null and undefined throw', () => {
    expect(() => direBonjour(null)).toThrow('Un nom est requis !');
    expect(() => direBonjour(undefined)).toThrow('Un nom est requis !');
  });

  test('numeric falsy value (0) throws', () => {
    expect(() => direBonjour(0)).toThrow('Un nom est requis !');
  });

  test('handles names with special characters', () => {
    expect(direBonjour("O'Connor-李" )).toBe("Bonjour, O'Connor-李 !");
  });

  test('non-string values throw or are handled (empty array)', () => {
    expect(() => direBonjour([])).toThrow('Un nom est requis !');
  });

  test('non-string truthy values (object, boolean) throw', () => {
    expect(() => direBonjour({})).toThrow('Un nom est requis !');
    expect(() => direBonjour(true)).toThrow('Un nom est requis !');
    expect(() => direBonjour(false)).toThrow('Un nom est requis !');
  });

  test('error message is exact for all invalid inputs', () => {
    const errorMsg = 'Un nom est requis !';
    expect(() => direBonjour(null)).toThrow(errorMsg);
    expect(() => direBonjour(undefined)).toThrow(errorMsg);
    expect(() => direBonjour('')).toThrow(errorMsg);
    expect(() => direBonjour(0)).toThrow(errorMsg);
    expect(() => direBonjour([])).toThrow(errorMsg);
    expect(() => direBonjour({})).toThrow(errorMsg);
  });

  test('export exists and is a function', () => {
    expect(typeof direBonjour).toBe('function');
  });
});
