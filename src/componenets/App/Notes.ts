import {NoteInterface} from "../Note";

export interface NoteData {
    type: string;
    title?: string;
    tags?: number[];
    color?: number;
    items?: Item[];
    size: string;
    created: number;
    text?: string;
    attachments?: Attachment[];
    reminder?: number;
    url?: string;
}

export interface Attachment {
    type: string;
    url: string;
}

export interface Item {
    text: string;
    checked: boolean;
}

class Note {
    private currentData: NoteData;

    constructor(data: NoteData) {
        this.currentData = data;
    }
    get data(): NoteData {
        return this.currentData;
    }
}

export class Notes {
    public static factory(Instance: Notes, data: NoteData[]) {
        Instance.notes = Instance.notes || [];
        for (const element of data) {
            Instance.addNote(element);
        }
    }
    private notes: Note[];

    constructor() {
        this.notes = [];
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
