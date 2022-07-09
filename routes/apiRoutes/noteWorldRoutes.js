const router = require('express').Router();
const { createNewNote } = require('../../lib/notesCRUD');
const { notes } = require('../../db/db');

//getting the saved notes
router.get('/notes', (req, res) => {
  let results = notes;
  console.log("results")

  console.log(results)

  res.json(results);

//   if (results) {
//     res.json(results);
// } else {
//     res.send(404);
//   }
});



router.post('/notes', (req, res) => {
  // set id based on what the next index of the array will be
  console.log(notes.length)
  req.body.id = notes.length.toString();
    const note = createNewNote(req.body, notes);
    res.json(note);
});

module.exports = router;
