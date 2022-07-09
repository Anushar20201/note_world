const router = require('express').Router();
const { createNewNote } = require('../../lib/notesCRUD');
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
    const note = createNewNote(req.body, db);
    res.json(note);
});

module.exports = router;
