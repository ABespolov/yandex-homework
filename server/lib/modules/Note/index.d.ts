import { NoteData } from "../../shemas/Note";
export declare class Note {
    private currentData;
    constructor(data: NoteData);
    readonly data: NoteData;
}
