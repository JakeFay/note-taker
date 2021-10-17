const util = require('util');
const fs = require('fs');

const uuidv1 = require('uuid/v1');

const readAsync = util.promisify(fs.readFile);
const writeAsync = util.promisify(fs.writeFile);

class Notes {
    read() {
        return readAsync('db/db.json', 'utf8');
    }

    write(data) {
        return writeAsync('db/db.json', JSON.stringify(data))
    }

    readNotes() {
        return this.read().then((notes) => {
            let newNotes;
            try {
                newNotes = [].concat(JSON.parse(notes))
            } catch (err) {
                newNotes = []
            }
            return newNotes;
        })
    }

    addNote(note) {
        const { title, text } = note;

        const newNote = {
            title, text, id: uuidv1()
        }

        return this.readNotes().then((notes) => [...notes, newNote]).then((updatedNotes) => this.write(updatedNotes)).then(() => newNote)
    }

    deleteNote(id) {
        return this.readNotes().then((notes) => notes.filter((note)=> note.id !== id)).then((filteredNotes)=> this.write(filteredNotes))
    }
}

module.exports = new Notes()