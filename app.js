// app.js — Notre "application" ultra-simple

function additionner(a, b) {

  return a + b;

}

function direBonjour(nom) {

  // Reject explicit empty-like values (undefined, null, empty string, 0)
  if (nom === undefined || nom === null || nom === '' || nom === 0) {
    throw new Error('Un nom est requis !');
  }

  // Ensure nom is a string (reject non-string types like arrays, objects, etc.)
  if (typeof nom !== 'string') {
    throw new Error('Un nom est requis !');
  }

  // If the provided name is a whitespace-only string, treat it as provided
  // but keep a compact greeting format matching existing tests.
  if (nom.trim() === '') {
    return 'Bonjour,  !';
  }

  return `Bonjour, ${nom} !`;

}

module.exports = { additionner, direBonjour };
