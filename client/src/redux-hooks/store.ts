export interface Action {
    type: "messageBody" | "messageInfo" | "messagesList" | "mailersList";
    id: string;
    messagesBody: {};
    messagesInfo: {};
    messagesList: {};
    mailersList: {};
}

const initialState = {
    messagesBody: {},
    messagesInfo: {},
    messagesList: {},
    mailersList: {},
};

interface IdKeysObject {
    [key: string]: {};
}

export const reducer = (state = initialState, action: Action) => {
    const obj: IdKeysObject = {};
    switch (action.type) {
        case "messageBody":
            obj[action.id] = action.messagesBody;
            return {...state, messagesBody: {...state.messagesBody, ...obj}};
        case "messageInfo":
            obj[action.id] = action.messagesInfo;
            return {...state, messagesInfo: {...state.messagesInfo, ...obj}};
        case "messagesList":
            return {...state, messagesList: action.messagesList};
        case "mailersList":
            return {...state, mailersList: action.mailersList};
        default:
            return state;
    }
};
