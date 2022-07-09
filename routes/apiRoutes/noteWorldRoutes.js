const router = require('express').Router();
const { createNewNote } = require('../../lib/notesCRUD');
const { noteData } = require('../../db/db');

//getting the saved notes
router.get('/notes', (req, res) => {
  let results = noteData;
  res.json(results);

//   if (results) {
//     res.json(results);
// } else {
//     res.send(404);
//   }
});



router.post('/notes', (req, res) => {
  // set id based on what the next index of the array will be
  console.log(noteData.length)
  req.body.id = noteData.length.toString();
    const note = createNewNote(req.body, noteData);
    res.json(note);
});

module.exports = router;
