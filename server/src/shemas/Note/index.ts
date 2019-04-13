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

export interface NoteInterface {
    color?: string;
    size?: string;
    title?: string;
    text?: string;
    type?: string;
    created?: number;
    reminder?: number;
    url?: string;
    tags?: Array<{
        tag: string,
    }>;
    attachments?: Array<{
        type: string,
        url: string,
    }>;
    items?: Array<{
        text: string,
        checked: boolean,
    }>;
}

interface Attachment {
    type: string;
    url: string;
}

interface Item {
    text: string;
    checked: boolean;
}