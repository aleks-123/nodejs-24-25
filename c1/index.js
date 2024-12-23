//!1. - core moduli
//* http - za kreiranje i rakuvanje na server
//* assert - za debagiranje i testiranje
//* fs(file system) - za interakcija so datotechen sistem na nashiot kompjuter
//* path - so ova ja utvrduvame patekata na nashiot direktorium
//* process - ova ni dava infomracii so koi procesi nashata aplikacija raboti
//* os - ni dava informacii za koj operativen sistem se naogja nashata nodejs apliackija

//!2. localni komduli
//* ova se moduli kreirani od nas

//!3 third party moduli
//* mongoose, express, dotenv, ejs, morgan...
//* ovie moduli se instaliraat so npm (node package menager)

/////////////

//? povtoruvanje na js
// funkcionalni deklaracii
console.log(`sobirokot ${sobirok(2, 3)}`);

function sobirok(a, b) {
  return a + b;
}

// funkcionalni ekspresii
const proizvod = function (a, b) {
  return a * b;
};
console.log(`proizvod ${proizvod(2, 3)}`);

// fat arrow function
const razlika = (a, b) => {
  return a - b;
};
console.log(`razlika ${razlika(6, 2)}`);

// metodi

const ucenik = {
  ime: 'Stavre',
  pozdrav: function () {
    console.log(`Zdravo, ${this.ime}`);
  },
};

ucenik.pozdrav();

//IIFE Immedietly invoked function expression
(function () {
  console.log('funckija');
})();

// ? zadaca broj 1: Da se kreira funkcionalna eskpresija so ime c2f koja kje konvertira celziusiovi stepeni vo farenhajt

//Hihg order functions

function mnozenje(broj1) {
  return function (broj2) {
    return broj2 * broj1;
  };
}
const prva = mnozenje(2);
console.log(prva(5));

function calculator(operacija) {
  return function (a, b) {
    switch (operacija) {
      case 'soberi':
        return a + b;
      case 'odzemi':
        return a - b;
      case 'pomnozi':
        return a * b;
      case 'podeli':
        return a / b;
    }
  };
}

const soberiOperacija = calculator('soberi');
console.log(soberiOperacija(5, 3));

//Da se kreira funkcija koja kje zema kako argument c2f ili f2c i koja kje gi pretvora celzisuovite vo farenhajt ili obratno

//* TYPEOF

console.log(typeof undefined);
console.log(typeof 230);
console.log(typeof 12n);
console.log(typeof false);
console.log(typeof 'undefined');
console.log(typeof null);
console.log(console.log);

//* BOOLEAN TRUE FALSE
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean('1'));
console.log(Boolean(''));

//* TEST
console.log(`test ${+true}`);
console.log(`test2 ${+false}`);
console.log(`test2 ${+''}`);

console.log(2 > 1);
console.log(2 == '2');
console.log(2 === '2');

//* || -ili  && -and

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// console.log(false && false);
//! Ternary operators
// uslov ? ako uslovot e tocen : ako uslovot e netocen
const reperZaPolnoletnost = 18;
const vozrazNaCovek = 26;

const proverka = 26 >= 18 ? 'polnoleten' : 'maloleten';

//! Working with arrays
const arrayEden = [5, 2, 3, 6, 7, 8];

const arrayNov = [];

//! forEach vrshi iteracija na sekoj element vo arraot
arrayEden.forEach((item, index, arr) => console.log(item, index));

//! map - izminuvva niza i rezultatot e nova niza, i se zapisuva kako varibla
const arrayTri = arrayEden.map((item, i) => {
  return 1;
});

console.log(arrayTri);

//! REDUCE
const arrayDva = [1, 2, 3, 4, 5, 6];

const rezultat = arrayDva.reduce((acc, s) => {
  return acc + s;
}, 0);
console.log(rezultat);

//! SORT
// arrayEden.sort((a, b) => a - b);
// console.log(arrayEden);

//! filter vrakja niza elementi koi odgovaraat na nekoj uslov
const brojkiFilter = arrayDva.filter((s) => {
  return s > 4;
});
console.log(brojkiFilter);

//! find
const brojkaFind = brojkiFilter.find((s) => {
  return s === 6;
});
console.log(brojkaFind);

const studenti = [
  { ime: 'Pero', prosek: 7.1, grad: 'Berovo' },
  { ime: 'Stojko', prosek: 6, grad: 'Kavadarci' },
  { ime: 'Stojna', prosek: 10, grad: 'Veles' },
  { ime: 'Mara', prosek: 5, grad: 'Kichevo' },
  { ime: 'Petka', prosek: 8.3, grad: 'Skopje' },
  { ime: 'Mitre', prosek: 7.5, grad: 'Ohrid' },
  { ime: 'Risto', prosek: 9, grad: 'Strumica' },
  { ime: 'Tosho', prosek: 8.3, grad: 'Gevgelija' },
];

const filtriraniStudenti = studenti.filter((student) => student.prosek >= 8).sort((a, b) => a.prosek - b.prosek);
console.log(filtriraniStudenti);

// DA se presmetat vkupniot prosek na site studenti
// da se isfiltriraat site studenti sto imaat pomalku od 4 ednakvo so 4 karakteri
// Da se pronajdit studentot od Strumica
// da kreirate horoskop funkcija - parametar mesec(bonus i denovi)
//da kreirame funkcija sto presmetuvat plostina na pravoaglonik
// da kreirame funkcija sto presmetuva perimetar na pravoagolnil

//! Kopiranje na array
const array1 = [1, 2, 5, 2, 3, 5];
const array3 = [1, 1, 1, 2, 3, 5];
const array2 = [...array1, ...array3, 2, 3, 7, 6, 7, 3];

console.log(array2);

const obj1 = {
  predmet1: 'prv',
  predmet2: 'vtor',
};

const kopijaObj1 = {
  ...obj1,
};

const obj2 = {
  predmet3: 'tret',
  predmet4: 'cetvrt',
};

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

const primer = {
  jabolko: 30,
  cveklo: 10,
  limun: 70,
};

const novPrimer = {
  ...primer,
  jabolko: 40,
  jabolko: 50,
  cveklo: 20,
  limutus: 5,
};
console.log(novPrimer);
////////

//Destruction
const arr1 = [1, 2, 3, 6, 7, 8, 4, 4, 4];
const [a, b, ...nebitniParametri] = arr1;
console.log(a);
console.log(b);
console.log(nebitniParametri);

const predmet = {
  produkt: 'Piperka',
  cena: 300,
};

const { cena } = predmet;

const funkcija = (zelencuk) => {
  console.log(zelencuk);
};

funkcija(predmet.produkt);
funkcija(produkt);

//? 1. Сите студенти од Скопје чие име завршува на а и имаат просек над 7, подредени по име (растечки).
//? 2. Сите студенти кои имаат просек над 9 и не се од Скопје, подредени по просек опаѓачки.
//? 3. Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек.
//? 4. Вкупен просек на студенти кои се од Куманово
//? 5. Просек на просеците од градовите Скопје и Охрид
//? 6. Да се додаде уште еден студент со име Горан, просек 7.3 и град Делчево
//? 7. Да се избрише првиот студент во студенти
//? 8. Да се креира нов array каде што студентите од Охрид и Куманово каде што оценките со просек се за 1 поголем(Динамички)
