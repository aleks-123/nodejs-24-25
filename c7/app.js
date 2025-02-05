//! MVC ARHITEKTURA

const express = require('express');

const app = express();

const port = 10000;
app.listen(port, (err) => {
  if (err) return console.log(err.message);
  console.log(`server successfully started on ${port}`);
});
