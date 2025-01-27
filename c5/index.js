const http = require('http');

// const server = http.createServer((req, res) => {
//   res.end('Hello from the web server');
// });

// server.listen(10000, '127.0.0.1', (err) => {
//   if (err) console.log('Imashe greska pri startuvanjeto na serverot');
//   console.log('Serverot startuva uspesno na porta 10000');
// });

const handler = (req, res) => {
  // console.log(req.url.split('/'));
  // console.log(req.method);
  // console.log(req.headers['user-agent']);

  const [_, op, a, b] = req.url.split('/');

  let o;

  switch (op) {
    case 'sobiranje':
      o = Number(a) + Number(b);
      res.end(`${o}`);
      break;
    case 'odzemanje':
      o = Number(a) - Number(b);
      res.end(`${o}`);
      break;
    case 'delenje':
      o = Number(a) / Number(b);
      res.end(`${o}`);
      break;
    case 'mnozenje':
      o = Number(a) * Number(b);
      res.end(`${o}`);
      break;
    default:
      res.end('Odbravte nepostoecki operator');
  }
};

const server = http.createServer(handler);

server.listen(10000, '127.0.0.1', (err) => {
  if (err) console.log('Imashe greska pri startuvanjeto na serverot');
  console.log('Serverot startuva uspesno na porta 10000');
});

//! zadaca 1
//? Da se kreira exo server
//? /semos - res.end('semos')
//! zadaca 2
//? Na sekoj pristap do nashiot web server da ni vrakja(res) random broj od 1 do 10
//! zadaca 3
//? Vrakjanje na pozdrav /petar, web serverot da vrati zdravo petar

//! DOMASNA
//? Servis koj kje moze da obrabotuva ruti od sledniot tip

// /ime/bojan

//res = paren: ne, karakteri: 5, soglaski: 2, samoglaski: 3
