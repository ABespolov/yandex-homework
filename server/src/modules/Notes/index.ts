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
    private notes: Note[];

    private static getColor = (note: NoteData, colors: any) => {
        const colorObject = colors.find((item: any) => item.id === note.color);
        return colorObject ? colorObject.color : "#fff";
    };

    private static getTags = (note: NoteData, tags: any) => {
        const tagsList = tags.filter((item: any) =>
            note.tags && note.tags.some((num) => num === item.id));
        return tagsList;
    };

    constructor() {
        this.notes = [];
    }

    public getNotesByColor(color: string){
        return this.notes.filter((item: Note) =>
            String(item.data.color) === color);
    }

    public addNote(data: NoteData) {
        this.notes.push(new Note(data));
    }

    public toArray() {
        return this.notes;
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