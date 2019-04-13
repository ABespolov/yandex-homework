import {NoteData} from "../../shemas/Note";

export class Note {
    private currentData: NoteData;

    constructor(data: NoteData) {
        this.currentData = data;
    }
    get data(): NoteData {
        return this.currentData;
    }
}
