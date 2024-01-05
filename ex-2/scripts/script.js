let birthDate = new Date('1991-06-08');
let inputDate = new Date(birthDate);
let currentDate = new Date();
let timeDiff = currentDate - inputDate;
let daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

console.log( "Déja " + daysPassed + " jours sont passé depuis ma naissance!");