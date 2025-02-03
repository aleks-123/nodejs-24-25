const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('home ruta');
});

app.get('/zdravo', (req, res) => {
  res.send('Zdravo od web server');
});

app.get('/zdravo/:ime/:prezime', (req, res) => {
  console.log(req.params);
  res.send(`zdravo ${req.params.ime} ${req.params.prezime}`);
});

app.get('/calculator/:op/:a/:b', (req, res) => {
  const broj1 = Number(req.params.a);
  const broj2 = Number(req.params.b);
  const operacija = req.params.op;
  switch (req.params.op) {
    case 'sobiranje':
      return res.send(`${Number(req.params.a) + Number(req.params.b)}`);
    case 'odzemanje':
      return res.send(`${Number(req.params.a) - Number(req.params.b)}`);
    case 'delenje':
      return res.send(`${Number(req.params.a) / Number(req.params.b)}`);
    case 'mnozenje':
      return res.send(`${Number(req.params.a) * Number(req.params.b)}`);
    default:
      return res.send('Nepoznat operator');
  }
});

const kalkulatorFunkcija = (req, res) => {
  switch (req.body.operacija) {
    case 'sobiranje':
      return res.send(`${Number(req.body.a) + Number(req.body.b)}`);
    case 'odzemanje':
      return res.send(`${Number(req.body.a) - Number(req.body.b)}`);
    case 'delenje':
      return res.send(`${Number(req.body.a) / Number(req.body.b)}`);
    case 'mnozenje':
      return res.send(`${Number(req.body.a) * Number(req.body.b)}`);
    default:
      return res.send('Nepoznat operator');
  }
};

app.post('/calculator', kalkulatorFunkcija);

// app.get('/ime/:name', (req,res) => {})

app.listen(10000, (err) => {
  if (err) return console.log(err.message);
  console.log('Server started successfully on port 10000');
});

// https://www.npmjs.com/package/currency-converter-lt
// https://github.com/paul-shuvo/nodejs-crypto-converter
// https://www.coingecko.com/en/api

//! MVC
//! M - Model - VO modelot stoi logikata na podatocite (biznis logika)
//! V - View - View e zagrizen za prezentacija na izgledot (Grafikata)
//! C - Controller - Kontrolerot e mozokot na nashata stranica, koj vrshi interakcija so modelot i view

//? 5 ruti so post metoda
