"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Note {
    constructor(data) {
        this.currentData = data;
        this.archive = false;
    }
    get data() {
        return this.currentData;
    }
    get isArchive() {
        return this.archive;
    }
    set isArchive(flag) {
        this.archive = flag;
    }
}
exports.Note = Note;
