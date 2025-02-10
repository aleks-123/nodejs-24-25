let data = {
  ime: 'Pero',
  prezime: 'Peroski',
  niza: ['Skopje', 'Bitola', 'Kavadarci', 'Negotino', 'Ohrid', 'Resen'],
  studenti: [
    { ime: 'Pero', prezime: 'Peroski', prosek: 9.2 },
    { ime: 'Janko', prezime: 'Jankovski', prosek: 7.2 },
    { ime: 'Stanka', prezime: 'Stanoska', prosek: 8.2 },
    { ime: 'Stanko', prezime: 'Stankoski', prosek: 5.2 },
    { ime: 'Ivan', prezime: 'Ivanovski', prosek: 6.2 },
  ],
};

exports.getView = (req, res) => {
  res.render('index', data);
};

exports.postForm = (req, res) => {
  console.log(req.body);
  const newStudent = {
    ime: req.body.ime,
    prezime: req.body.prezime,
    prosek: req.body.prosek,
  };
  data.studenti.push(newStudent);
  res.render('index', data);
};
