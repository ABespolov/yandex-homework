import {NoteData} from "../../shemas/Note";

export class Note {
    private currentData: NoteData;
    private archive: boolean;

    constructor(data: NoteData) {
        this.currentData = data;
        this.archive = false;
    }
    get data(): NoteData {
        return this.currentData;
    }
    get isArchive(): boolean {
        return this.archive;
    }
    set isArchive(flag: boolean){
        this.archive = flag;
    }
}
