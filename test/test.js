const assert = require('assert');
const Notes = require("../server/lib/modules/Notes");
const data = require("../server/data");

describe('Notes class: ', function() {
    const nts = new Notes();
    it('Add note and get all notes', function() {
        assert.strictEqual(nts.getAllNotes(false).length, 0);
        nts.addNote(data.notes[0]);
        assert.strictEqual(nts.getAllNotes(false).length, 1);
    });
    it('Initialization of notes array', function() {
        Notes.factory(nts, data.notes, data.colors, data.tags);
        const notesArr = nts.getAllNotes(false);
        notesArr.forEach(item => {
            assert.strictEqual(typeof item.data.type, "string");
        });
    });
    it('Get notes by color', function() {
        Notes.factory(nts, data.notes, data.colors, data.tags);
        assert.strictEqual(nts.getNotesByColor("#fff").length >= 1, true);
    });
});