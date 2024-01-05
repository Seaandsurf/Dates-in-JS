let now = new Date()
let Anchorage = { timeZone: 'America/Anchorage', hour12: false };
let Reykjavik = { timeZone: 'Europe/London', hour12: false};
let SaintPétersbourg = { timeZone: 'Europe/London', hour12: false};

console.log("Heure d'Anchorage : " + now.toLocaleString('en-US', Anchorage));
console.log("Heure d'Reykjavik : " + now.toLocaleString('en-US', Reykjavik));
console.log("Heure d'SaintPétersbourg : " + now.toLocaleString('en-US', SaintPétersbourg));



// 10:49
// vendredi 5 janvier 2024 (UTC+1)
// Heure (Bruxelles)

// 00:47
// vendredi 5 janvier 2024 (UTC−9)
// Heure (Anchorage, Alaska, États-Unis)

// 09:47
// vendredi 5 janvier 2024 (UTC)
// Heure (Reykjavik, Islande)

// 12:48
// vendredi 5 janvier 2024 (UTC+3)
// Heure (Saint-Pétersbourg, Russie)


