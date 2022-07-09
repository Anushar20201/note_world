const fs = require('fs');
const path = require('path');

function createNewNote(body, notesCRUDArray) {
  const note = body;
  notesCRUDArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: notesCRUDArray }, null, 2)
  );
  return note;
}



module.exports = {
    createNewNote
};
