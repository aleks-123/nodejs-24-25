const { fail } = require('assert');
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

//! Callback patern
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

//! Promise patern

// //! Cekor 1
// const fileWrite = () => {};

// //! Cekor 2
// const fileWrite = () => {
//   return new Promise(() => {});
// };

// //! Cekor 3
// const fileWrite = () => {
//   return new Promise((success, fail) => {});
// };

// //! Cekor 4
// const fileWrite = () => {
//   return new Promise((success, fail) => {
//     fs.writeFile('data.txt', 'Promis', (err) => {
//       if (err) return console.log(err);
//       console.log('Zapisot e uspesno kreiran');
//     });
//   });
// };

// //! Cekor 5
// const fileWrite = () => {
//   return new Promise((success, fail) => {
//     fs.writeFile('data.txt', 'Promis', (err) => {
//       if (err) return fail(err);
//       return success();
//     });
//   });
// };

//! Cekor 6
const fileWrite = (filename, data) => {
  return new Promise((success, fail) => {
    fs.writeFile(filename, data, 'utf-8', (err) => {
      if (err) return fail(err);
      return success();
    });
  });
};

const fileRead = (filename) => {
  //resolve, reject
  return new Promise((success, fail) => {
    fs.readFile(filename, 'utf-8', (err, data) => {
      if (err) {
        return fail(err);
      }
      return success(data);
    });
  });
};

const main = async () => {
  try {
    await fileWrite('data1.txt', 'Promise 1');
    await fileWrite('data2.txt', 'Promise 2');
    await fileWrite('tekst124.txt', 'Promise 124');
    const zelencuk = await fileRead('zelencuk.txt');
    console.log(zelencuk);
  } catch (err) {
    console.log(err);
  }
};

main();

//! Promisot moze da bide
// Pending (Cekanje): Inicijalna sostojvba, ne eispolnet nitu odbien
// Fulfilled/success (Ispolnet): Oznacuva operacijata zavrsila uspesno
//Rejected/fail (Odbien): Oznacuva operacijata zavrsila so greshka
