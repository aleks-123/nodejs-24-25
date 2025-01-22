const readWrite = require('./readWrite');
const kalkuator = require('./kalkulator');
////
(async () => {
  try {
    console.log(readWrite);
    const studentiData = await readWrite.fileRead('studenti.json');
    //* JSON.parse - Pretvorame vo JavaScript objekti
    const studenti = JSON.parse(studentiData);
    const studentiSort = studenti.sort((a, b) => {
      if (a.prosek < b.prosek) {
        return -1;
      } else if (a.prosek > b.prosek) {
        return 1;
      }
      return 0;
    });

    console.log(studentiSort);
    const najnizokProsek = studentiSort[0];
    const najvisokProsek = studentiSort[studentiSort.length - 1];
    console.log(najnizokProsek);
    console.log(najvisokProsek);

    const vkupenProsek = studentiSort.reduce((acc, cur) => {
      return acc + cur.prosek;
    }, 0);

    console.log(vkupenProsek);

    await readWrite.fileWrite('vkupenProsek.txt', JSON.stringify(vkupenProsek));

    const rezultat = kalkuator.sobiranje(2, 3);
    console.log(rezultat);
    //////
    //////
  } catch (err) {
    console.log(err);
  }
})();

//? Studenti [reden broj, ime, prezime, prosek, grad]
//? dodavanje na student vo fajlot
//? Brishenje na student od fajlot
//? menuvanje na podatoci na student od fajlot
//? chitanje na site studenti od fajlot

//? - Treba da dodademe student vo fajlot
//? 1. Da ja vhitate celata sodrzina od fajlot | fs.readFile
//? 2. Da ja konvertirate sodrzinata od obichen tekst vo js niza / objekt | JSON.parse
//? 3. Treba da gi dodadete podatocite na studentot vo nizata | Array.push
//? 4. Nizada od js niza/objekt treba da bide konvertirana vo tekst | JSON.strinfify
//? 5. Tekstot treba da bide zacuvan vo fajlot | fs.writeFile

//? - Imeto na studentot treba da bide smenet od AAA vo AAB
//? 1. Da ja vchitate celata sodrzina od fajlot | fs.readFile
//? 2. Da ja konvertirate sodrzinata od obichen tekst vo js niza/objekt | JSON.parse
//? 3. Da gi izminite site elementi vo nizata i da napravite promena samo na soodveteniot clen | Array.map
//? 4. Nizata od js niza/objekt treba da bide konertirana vo tekst | JSON.stringify
//? 5. Tekstot treba da bide zachuvan vo fajlot | fs.writeFile

//? - Treba da se izbrise student od fajlot
//? 1. Da ja vchitate celata sodrzina od fajlot | fs.readFile
//? 2. Da ja konvertirate sodrzinata od obichen tekst vo js niza/objekt | JSON.parse
//? 3. Da gi izminite site elementi vo nizata i da go izbrishite samo soodvetniot clen | Array.filter
//? 4. Nizata od js niza/objekt treba da bide konertirana vo tekst | JSON.stringify
//? 5. Tekstot treba da bide zachuvan vo fajlot | fs.writeFile
