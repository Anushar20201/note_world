const fs = require('fs');
const path = require('path');


//create function for adding new note
function createNewNote(body, notesCRUDArray) {
  const note = body;
  notesCRUDArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: notesCRUDArray }, null, 2)
  );
  return note;
}

//delete function for deleting any note
function deleteOldNote(notesCRUDArray, id) {
  let deltedId = id;
  notesCRUDArray.splice(deltedId, 1);

  // Re-assigning for the notes - which are after the deletedNote (shifting the indexes)
  for (let index = deltedId; index < notesCRUDArray.length; index++) {
    notesCRUDArray[index].id = index
  }

  fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({
          notes: notesCRUDArray
      }, null, 2)
  )
}



module.exports = {
    createNewNote, deleteOldNote
};
