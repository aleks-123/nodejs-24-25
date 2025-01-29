const express = require('express');

const app = express();

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

// app.get('/ime/:name', (req,res) => {})

app.listen(10000, (err) => {
  if (err) return console.log(err.message);
  console.log('Server started successfully on port 10000');
});
