export interface Action {
    type: "setCards";
    cards: {};
}

const initialState = {
    cards: {},
};

export const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case "setCards":
            return {...state, cards: action.cards};
        default:
            return state;
    }
};
