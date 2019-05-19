"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Note {
    constructor(data) {
        this.currentData = data;
    }
    get data() {
        return this.currentData;
    }
}
exports.Note = Note;
