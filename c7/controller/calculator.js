const fs = require('fs');

//! __dirname e apsolutna pateka na aplikacijata

const parseTemplate = async (template, object = null) => {
  return new Promise((success, fail) => {
    fs.readFile(`${__dirname}/../views/${template}`, 'utf8', (err, content) => {
      if (err) {
        return fail(err);
      }
      if (object) {
        for (property in object) {
          content = content.replaceAll(`{{${property}}}`, object[property]);
        }
      }
      return success(content);
    });
  });
};

const bmiCalculator = async (req, res) => {
  const weight = req.params.weight;
  const height = req.params.height;
  const bmi = weight / (height * height);

  const response = await parseTemplate('calculator.html', {
    ime: 'BMI CALCULATOR',
    data: bmi,
  });

  res.send(response);
};

const calculateForce = async (req, res) => {
  const mass = req.params.mass;
  const accelaration = req.params.acc;
  const response = await parseTemplate('calculator.html', {
    ime: 'Presmetka na vtor newton zakon',
    data: mass * accelaration,
  });

  res.send(response);
};

const getCalculator = async (req, res) => {
  try {
    const output = await parseTemplate('calculator_form.html');
    res.end(output);
  } catch (err) {
    res.send('internal server error');
  }
};

const postCalculator = async (req, res) => {
  if (req.body.a === '' || req.body.b === '') {
    return res.send('bad request');
  }
  let result = '';

  switch (req.body.op) {
    case 'sobiranje':
      result = `${Number(req.body.a) + Number(req.body.b)}`;
      break;
    case 'odzemanje':
      result = `${Number(req.body.a) - Number(req.body.b)}`;
      break;
    case 'mnozenje':
      result = `${Number(req.body.a) * Number(req.body.b)}`;
      break;
    case 'delenje':
      result = `${Number(req.body.a) / Number(req.body.b)}`;
      break;
    default:
      result = 'nepoznat operator';
  }

  const output = await parseTemplate('calculator.html', {
    ime: 'Operacija',
    data: result,
  });
  res.send(output);
};

module.exports = {
  bmiCalculator,
  calculateForce,
  getCalculator,
  postCalculator,
};
