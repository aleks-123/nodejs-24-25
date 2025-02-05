//! MVC ARHITEKTURA

const express = require('express');
const calculator = require('./controller/calculator');

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/bmi/:weight/:height', calculator.bmiCalculator);
app.get('/newton/:mass/:acc', calculator.calculateForce);

app.get('/calculator', calculator.getCalculator);
app.post('/calculator', calculator.postCalculator);

const port = 10000;
app.listen(port, (err) => {
  if (err) return console.log(err.message);
  console.log(`server successfully started on ${port}`);
});
