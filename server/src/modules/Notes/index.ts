import {NoteData, NoteInterface} from "../../shemas/Note";
import {Note} from "../Note";

class Notes {
    public static factory(Instance: Notes, data: NoteData[], colors: any, tags: any) {
        Instance.notes = Instance.notes || [];
        for (const element of data) {
            element.color = this.getColor(element, colors);
            element.tags = this.getTags(element, tags);
            Instance.addNote(element);
        }
    }

    private static getColor = (note: NoteData, colors: any) => {
        const colorObject = colors.find((item: any) => item.id === note.color);
        return colorObject ? colorObject.color : "#fff";
    }

    private static getTags = (note: NoteData, tags: any) => {
        const tagsList = tags.filter((item: any) =>
            note.tags && note.tags.some((num) => num === item.id));
        return tagsList;
    }
    private notes: Note[];

    constructor() {
        this.notes = [];
    }

    public getNotesByColor(color: string) {
        return this.notes.filter((item: Note) =>
            String(item.data.color) === color);
    }

    public addToArchive(id: number) {
        const note = this.notes.find((item: Note) => item.data.created === id);
        note!.isArchive = !note!.isArchive;
    }

    public addNote(data: NoteData) {
        this.notes.push(new Note(data));
    }

    public deleteNote(id: string) {
        const index = this.notes.findIndex((item: Note) => item.data.created === +id);
        this.notes.splice(index, 1);
    }

    public getAllNotes(isArchive: boolean) {
        return this.notes.filter((item: Note) => isArchive === item.isArchive);
    }

    public map(callback: (item?: Note, index?: number, array?: Note[]) => NoteInterface) {
        const arr = [];
        for (let i = 0; i < this.notes.length; i++) {
            arr.push(callback(this.notes[i], i, this.notes));
        }
        return arr;
    }

    public [Symbol.iterator]() {
        return this.notes.values();
    }

    private getNoteSize = () => {
        /****not implemented****/
    }
}

module.exports = Notes;
