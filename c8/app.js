//! npm install express
//! npm install ejs
//! ejs (embedded javascript templating) - е шаблонски јазик кој се користи за генерирање на хтмл ознаки со обичен ЈаваСкрипт

const express = require('express');
const formular = require('./controller/formular');

const app = express();

//midelware
app.set('view engine', 'ejs');

//! aplikacijata moze da primi body
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const testData = {
  data1: 'TEST TEST TEST',
  data2: 'Template ',
};

app.get('/test', (req, res) => {
  res.render('template', testData);
});
app.get('/', formular.getView);
app.post('/', formular.postForm);

const port = 10000;
app.listen(port, (err) => {
  if (err) return console.log(err.message);
  console.log(`Service started on port ${port}`);
});
