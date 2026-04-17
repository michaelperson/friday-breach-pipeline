// app.js — Notre "application" ultra-simple

function additionner(a, b) {

  return a - b;

}

function direBonjour(nom) {

  if (!nom) throw new Error("Un nom est requis !");

  return `Bonjour, ${nom} !`;

}

module.exports = { additionner, direBonjour };
