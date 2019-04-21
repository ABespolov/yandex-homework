"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Note_1 = require("../Note");
class Notes {
    constructor() {
        this.getNoteSize = () => {
            /****not implemented****/
        };
        this.notes = [];
    }
    static factory(Instance, data, colors, tags) {
        Instance.notes = Instance.notes || [];
        for (const element of data) {
            element.color = this.getColor(element, colors);
            element.tags = this.getTags(element, tags);
            Instance.addNote(element);
        }
    }
    getNotesByColor(color) {
        return this.notes.filter((item) => String(item.data.color) === color);
    }
    addToArchive(id) {
        const note = this.notes.find((item) => item.data.created === id);
        note.isArchive = !note.isArchive;
    }
    addNote(data) {
        this.notes.push(new Note_1.Note(data));
    }
    getAllNotes(isArchive) {
        return this.notes.filter((item) => isArchive === item.isArchive);
    }
    map(callback) {
        const arr = [];
        for (let i = 0; i < this.notes.length; i++) {
            arr.push(callback(this.notes[i], i, this.notes));
        }
        return arr;
    }
    [Symbol.iterator]() {
        return this.notes.values();
    }
}
Notes.getColor = (note, colors) => {
    const colorObject = colors.find((item) => item.id === note.color);
    return colorObject ? colorObject.color : "#fff";
};
Notes.getTags = (note, tags) => {
    const tagsList = tags.filter((item) => note.tags && note.tags.some((num) => num === item.id));
    return tagsList;
};
module.exports = Notes;
