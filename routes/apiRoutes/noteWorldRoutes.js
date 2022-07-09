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


module.exports = router;
