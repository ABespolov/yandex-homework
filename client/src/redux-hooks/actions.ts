import {uniFetchApi} from "../api/api";
import {ADD_TO_ARCHIVE, FILTER_CARDS, GET_ARCHIVE, GET_CARDS} from "../api/constants";

export const getCards = (dispatch: any) => {
    uniFetchApi(GET_CARDS)
        .then((data) => {
            dispatch({type: "setCards", cards: data});
        });
};

export const filterCards = (dispatch: any, colorId: string) => {
    uniFetchApi(FILTER_CARDS, colorId)
        .then((data) => {
            dispatch({type: "setCards", cards: data});
        });
};

export const addToArchive = (dispatch: any, id: string, cards: {}) => {
    uniFetchApi(ADD_TO_ARCHIVE, id);
    dispatch({type: "setCards", cards});
};

export const getArchive = (dispatch: any) => {
    uniFetchApi(GET_ARCHIVE)
        .then((data) => {
            dispatch({type: "setCards", cards: data});
    });
};
