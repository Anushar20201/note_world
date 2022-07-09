const router = require('express').Router();
const { createNewNote } = require('../../lib/noteCRUD');
const { db } = require('../../db/db');

//getting the saved notes
router.get('/db', (req, res) => {
  let results = db;
  if (results) {
    res.json(results);
} else {
    res.send(404);
  }
});



router.post('/db', (req, res) => {
  // set id based on what the next index of the array will be
  req.body.id = db.length.toString();

  if (!validateAnimal(req.body)) {
    res.status(400).send('The animal is not properly formatted.');
  } else {
    const animal = createNewAnimal(req.body, db);
    res.json(animal);
  }
});

module.exports = router;
