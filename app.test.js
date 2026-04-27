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

// Stryker mutation score check
test('Stryker: all mutants killed (mutation score 100%)', () => {
  const fs = require('fs');
  const path = require('path');
  const reportPath = path.resolve(__dirname, 'reports', 'mutation', 'mutation.json');

  if (!fs.existsSync(reportPath)) {
    throw new Error(`Stryker mutation report not found at ${reportPath}. Run 'npx stryker run' to generate it.`);
  }

  const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
  const mutationScore = report.mutationScore ?? report.metrics?.mutationScore ?? report?.mutationScore;

  if (typeof mutationScore !== 'number') {
    throw new Error('Cannot find numeric mutation score in Stryker report.');
  }

  expect(mutationScore).toBe(100);

});
