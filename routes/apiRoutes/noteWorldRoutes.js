const router = require('express').Router();
const { createNewNote, deleteOldNote } = require('../../lib/notesCRUD');
const { notes } = require('../../db/db');

//getting the saved notes -GET method
router.get('/notes', (req, res) => {
  let results = notes;
  console.log(results)
  if (results) {
    res.json(results);
} else {
    res.send(404);
  }
});


//saving any new notes - POST method
router.post('/notes', (req, res) => {
  // set id based on what the next index of the array will be
  console.log(notes.length)
  req.body.id = notes.length.toString();
    const note = createNewNote(req.body, notes);
    res.json(note);
});


router.delete('/notes/:id', (req, res) => {
  deleteOldNote(notes, req.params.id);
  res.json(notes);
})


module.exports = router;
