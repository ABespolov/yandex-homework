import { NoteData } from "../../shemas/Note";
export declare class Note {
    private currentData;
    private archive;
    constructor(data: NoteData);
    readonly data: NoteData;
    isArchive: boolean;
}
