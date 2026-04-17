// app.test.js — Les tests automatiques

const { additionner, direBonjour } = require('./app');

// Test 1 : L'addition fonctionne-t-elle ?

test('additionner(2, 3) doit retourner 5', () => {

  expect(additionner(2, 3)).toBe(5);

});

// Test 2 : Le message de bienvenue est-il correct ?

test('direBonjour("Alice") doit retourner "Bonjour, Alice !"', () => {

  expect(direBonjour('Alice')).toBe('Bonjour, Alice !');

});

// Test 3 : La fonction rejette-t-elle un nom vide ?

test('direBonjour() sans argument doit lancer une erreur', () => {

  expect(() => direBonjour()).toThrow('Un nom est requis !');

});
