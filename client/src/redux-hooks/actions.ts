import {uniFetchApi} from "../api/api";
import {FILTER_CARDS, GET_CARDS} from "../api/constants";

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
