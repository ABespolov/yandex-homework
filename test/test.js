const assert = require("assert");
const Notes = require("../server/lib/modules/Notes");
const data = require("../server/data");

describe("Notes class: ", function() {
    const nts = new Notes();
    it("Add note and get all notes", function() {
        assert.strictEqual(nts.getAllNotes(false).length, 0);
        nts.addNote(data.notes[0]);
        assert.strictEqual(nts.getAllNotes(false).length, 1);
    });
    it("Initialization of notes array", function() {
        Notes.factory(nts, data.notes, data.colors, data.tags);
        const notesArr = nts.getAllNotes(false);
        notesArr.forEach(item => {
            assert.strictEqual(typeof item.data.type, "string");
        });
    });
    it("Get notes by color", function() {
        Notes.factory(nts, data.notes, data.colors, data.tags);
        assert.strictEqual(nts.getNotesByColor("#fff").length >= 1, true);
    });
    it("Delete note", function() {
        const noteCount = nts.getAllNotes(false).length;
        nts.deleteNote('1551780000000');
        const currNoteCount = nts.getAllNotes(false).length;
        assert.strictEqual(currNoteCount !== noteCount, true);
    });
    it("Add to archive", function() {
        nts.addToArchive(1551780000000);
        const currNoteCount = nts.getAllNotes(true).length;
        assert.strictEqual(currNoteCount, 1);
    });
});
