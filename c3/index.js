const fs = require('fs');

const vcitanTekst = fs.readFileSync('./tekst.txt', 'utf-8');
// console.log(vcitanTekst);

const podatok = `Ova sakame da go zapishime vo nashiot kompjuter ${2 + 2}`;
fs.writeFileSync('./novTekst.txt', podatok);
fs.writeFileSync('./novTekst2', 'Uchime Node.js');

function pozdrav(ime, callback) {
  console.log(`Zdravo, ${ime}`);
  callback();
}

function chao() {
  console.log('Chao');
}

pozdrav('Aleksandar', chao);

fs.readFile('./tekst.txt', 'utf-8', (err, tekst) => {
  if (err) {
    return console.log(err.message);
  }
  console.log(tekst);
});

console.log('TEST');

fs.writeFile('./asyhronWrite.txt', 'slusalki', 'utf-8', (err) => {
  if (err) {
    return console.log(err.message);
  }
  console.log('uspesno zapisan tekst');
});

//? fs drugi metodi
//? 4 fs metodi da gi upotrebite vo nekakov primer
